async function fetchTestData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 100 },
  })
  const data = await res.json()

  return data
}

export default async function ProfilePage() {
  const users: any[] = await fetchTestData()

  return (
    <main className='profile-page'>
      <h1>Profile Page</h1>
      {users ? (
        <ul>
          {users.length > 0 &&
            users.map((user: any) => (
              <li key={user.id}>
                <h1>{user.name}</h1>
                <h2>{user.username}</h2>
                <h3>{user.email}</h3>
              </li>
            ))}
        </ul>
      ) : null}
    </main>
  )
}
