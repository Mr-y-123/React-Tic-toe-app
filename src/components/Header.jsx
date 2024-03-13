
const nameArray=[
    "yogesh",
    "Dhru",
    "tanay"
]
const Header = () => {
    const generateRandomNumber=(num)=>{
      return Math.floor(Math.random() * num)  
    }
    const description=nameArray[generateRandomNumber(3)] 
    
  return (
    <>
        <h1>{description}React Essentials</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste at architecto, odio porro reiciendis reprehenderit unde, in itaque eveniet dolor delectus recusandae ratione ex iure maiores dicta quo rerum beatae?</p>
    </>
  )
}

export default Header