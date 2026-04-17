

export async function getUser() {
  const res = await fetch("http://localhost:3000/friends.json")
  if (!res.ok) return null

  return res.json();
}