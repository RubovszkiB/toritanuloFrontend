import { useEffect, useMemo, useState } from 'react'
import AppFooter from '../components/AppFooter'
import AppNavbar from '../components/AppNavbar'
import { createUser, getUsers, updateUser } from '../services/adminUserService'

const initialForm = {
  fullName: '',
  username: '',
  email: '',
  password: '',
  isActive: true,
}

function formatDate(value) {
  if (!value) {
    return 'Nincs adat'
  }

  return new Intl.DateTimeFormat('hu-HU', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value))
}

function getRoleLabel(role) {
  return String(role).toLowerCase() === 'admin' ? 'Admin' : 'Tanuló'
}

export default function AdminPage() {
  const [users, setUsers] = useState([])
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const activeCount = useMemo(() => users.filter((user) => user.isActive).length, [users])

  async function loadUsers() {
    setError('')
    setLoading(true)

    try {
      const data = await getUsers()
      setUsers(Array.isArray(data) ? data : [])
    } catch (loadError) {
      setError(loadError.message || 'Nem sikerült betölteni a felhasználókat.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSuccess('')
    setSaving(true)

    try {
      await createUser({
        fullName: form.fullName.trim() || null,
        username: form.username.trim(),
        email: form.email.trim(),
        password: form.password,
        isActive: form.isActive,
      })

      setForm(initialForm)
      setSuccess('A tanulói felhasználó elkészült.')
      await loadUsers()
    } catch (saveError) {
      setError(saveError.message || 'Nem sikerült létrehozni a felhasználót.')
    } finally {
      setSaving(false)
    }
  }

  async function toggleActive(user) {
    setError('')
    setSuccess('')

    try {
      const updated = await updateUser(user.id, {
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        isActive: !user.isActive,
      })

      setUsers((current) => current.map((item) => (item.id === updated.id ? updated : item)))
      setSuccess(updated.isActive ? 'A felhasználó aktiválva lett.' : 'A felhasználó inaktiválva lett.')
    } catch (updateError) {
      setError(updateError.message || 'Nem sikerült módosítani a felhasználót.')
    }
  }

  return (
    <div className="app-shell d-flex flex-column">
      <AppNavbar />

      <main className="admin-console py-5">
        <div className="container">
          <section className="admin-console-hero">
            <div>
              <span className="section-kicker">Admin</span>
              <h1>Felhasználók kezelése</h1>
              <p>
                Itt tanulói fiókokat hozhatsz létre, és kezelheted az aktív állapotukat. Az admin jogosultság backend oldalon is védve van.
              </p>
            </div>

            <div className="admin-console-stats">
              <div>
                <strong>{users.length}</strong>
                <span>felhasználó</span>
              </div>
              <div>
                <strong>{activeCount}</strong>
                <span>aktív</span>
              </div>
            </div>
          </section>

          {(error || success) && (
            <div className={`alert rounded-4 mt-4 ${error ? 'alert-danger' : 'alert-success'}`} role="alert">
              {error || success}
            </div>
          )}

          <div className="row g-4 mt-1">
            <div className="col-12 col-xl-4">
              <section className="admin-panel">
                <span className="section-kicker">Új tanuló</span>
                <h2>Felhasználó létrehozása</h2>
                <p>Az új fiók automatikusan tanulói jogosultságot kap. Admin szerepkört innen nem lehet kiosztani.</p>

                <form className="admin-user-form" onSubmit={handleSubmit}>
                  <label>
                    Név
                    <input
                      name="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Például: Kovács Anna"
                    />
                  </label>

                  <label>
                    Felhasználónév
                    <input
                      name="username"
                      type="text"
                      minLength="3"
                      maxLength="50"
                      required
                      value={form.username}
                      onChange={handleChange}
                      placeholder="anna"
                    />
                  </label>

                  <label>
                    Email
                    <input
                      name="email"
                      type="email"
                      maxLength="100"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="anna@email.hu"
                    />
                  </label>

                  <label>
                    Jelszó
                    <input
                      name="password"
                      type="password"
                      minLength="6"
                      maxLength="100"
                      required
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Legalább 6 karakter"
                    />
                  </label>

                  <label className="admin-check">
                    <input name="isActive" type="checkbox" checked={form.isActive} onChange={handleChange} />
                    Aktív felhasználó
                  </label>

                  <button className="btn btn-primary rounded-pill w-100" type="submit" disabled={saving}>
                    {saving ? 'Mentés...' : 'Tanuló létrehozása'}
                  </button>
                </form>
              </section>
            </div>

            <div className="col-12 col-xl-8">
              <section className="admin-panel">
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-3">
                  <div>
                    <span className="section-kicker">Fiókok</span>
                    <h2 className="mb-0">Felhasználói lista</h2>
                  </div>
                  <button className="btn btn-outline-secondary rounded-pill" type="button" onClick={loadUsers} disabled={loading}>
                    Frissítés
                  </button>
                </div>

                {loading ? (
                  <div className="admin-empty">Felhasználók betöltése...</div>
                ) : users.length ? (
                  <div className="admin-user-list">
                    {users.map((user) => (
                      <article className="admin-user-card" key={user.id}>
                        <div>
                          <div className="admin-user-title">
                            <strong>{user.fullName || user.username}</strong>
                            <span className={`admin-role-badge ${String(user.role).toLowerCase() === 'admin' ? 'is-admin' : ''}`}>
                              {getRoleLabel(user.role)}
                            </span>
                          </div>
                          <p>{user.username} · {user.email}</p>
                          <small>Utolsó módosítás: {formatDate(user.updatedAt || user.createdAt)}</small>
                        </div>

                        <div className="admin-user-actions">
                          <span className={`admin-status ${user.isActive ? 'is-active' : 'is-inactive'}`}>
                            {user.isActive ? 'Aktív' : 'Inaktív'}
                          </span>
                          <button className="btn btn-sm btn-outline-secondary rounded-pill" type="button" onClick={() => toggleActive(user)}>
                            {user.isActive ? 'Inaktiválás' : 'Aktiválás'}
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="admin-empty">Még nincs megjeleníthető felhasználó.</div>
                )}
              </section>
            </div>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
