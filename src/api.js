const BASE = import.meta.env.VITE_API_BASE_URL || "https://localhost:7216"

export async function login(username, password){
  const res = await fetch(BASE + "/api/Auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })

  if(!res.ok){
    throw new Error("Login hiba")
  }

  return await res.json()
}
