function Sidebar(){
    return <div className="app-sidebar">
  
      <div className="app-sidebar-header">
  
        <h1>Notes</h1>
        
        <button>Add</button>
      
      </div>
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note">
          <div className="side-note-title">
            <strong>TITLE</strong>
           
            <button className="delete">Delete</button>
          </div>
          <p>Note Preview</p>
  
          <small className="note-meta"> Last modified [date] </small>
        </div>
      </div>
    </div>
  }
    export default Sidebar;