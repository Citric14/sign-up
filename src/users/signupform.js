
  
<div className="row">
    <div className="col-sm-6 form-group">
        <label htmlFor="email">Email</label>
        <input
            type="email"
            required
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
            className="form-control"
            id="email"
            name="email"
        />
    </div>
    <div className="col-sm-6 form-group">
        <label htmlFor="password">Password</label>
        <input
            type="password"
            required
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
            className="form-control"
            id="password"
            name="password"
        />
    </div>
</div>
  
