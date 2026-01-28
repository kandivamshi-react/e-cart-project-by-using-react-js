import { UserButton } from '@clerk/clerk-react'

const Navbar = ({searchTerm, setSearchTerm}) => {
  console.log("searchTerm in navbar:", searchTerm);
  return (
    <div>
       
       <nav style={styles.nav}>
      <h1 style={styles.title}>Sky Glow</h1>

      <div style={styles.right}>
         <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          style={styles.search}
        />
        <UserButton />
      </div>
      </nav>
        
   
    </div>
    
  )
  
}

const styles = {
  nav: {
    height: "60px",
    padding: "0 20px",
    background: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    position: "relative",
    width: "100%",
  }, 
  title: {
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "30px",
    color: "blue",
    margin: 0,
  },
  right: {
    marginLeft: "auto",
    display: "flex",
  gap: "20px",  
  },
  search: {
    width: "300px",       
    height: "36px",       
    padding: "0 12px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    
  },
  
  
    
}


export default Navbar
