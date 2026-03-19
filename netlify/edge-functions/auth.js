export default async (request, context) => {
const authHeader = request.headers.get("authorization");

// Identifiants par défaut : formation / motdepasse
// Remplacez par vos propres identifiants encodés en base64
const validAuth = "Basic Zm9ybWF0aW9uOkZvcm1hdGlvbkJVQzIwMjY=";

if (authHeader !== validAuth) {
return new Response("Accès restreint", {
status: 401,
headers: {
"WWW-Authenticate": 'Basic realm="Accès protégé"',
"Content-Type": "text/plain; charset=utf-8",
},
});
}

return context.next();
};

export const config = { path: "/*" };
