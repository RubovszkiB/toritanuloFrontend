import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../api"

export default function Login(){
  const nav = useNavigate()
  const [u,setU]=useState("")
  const [p,setP]=useState("")
  const [err,setErr]=useState("")

  async function submit(e){
    e.preventDefault()
    setErr("")
    try{
      const data = await login(u,p)
      localStorage.setItem("token", data.token)
      nav("/")
    }catch{
      setErr("Backend hiba / rossz port")
    }
  }

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-gradient">
      <div className="card shadow p-4 w-100 login-card">
        <h3 className="mb-3 text-center">Bejelentkezés</h3>

        {err && <div className="alert alert-danger">{err}</div>}

        <form onSubmit={submit}>
          <input className="form-control mb-3" placeholder="felhasználó"
            value={u} onChange={e=>setU(e.target.value)} />

          <input type="password" className="form-control mb-3" placeholder="jelszó"
            value={p} onChange={e=>setP(e.target.value)} />

          <button className="btn btn-primary w-100">Belépés</button>
        </form>
      </div>
    </div>
  )
}
