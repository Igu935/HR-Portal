import { useState, useRef } from 'react'
import profilePhoto from './assets/teste.jpg'
import UsersList from './components/UsersList'
import SelectedUser from './components/SelectedUser'
import NoSelectedUser from './components/NoSelectedUser'
import AddUserModal from './components/AddUserModal'
import Header from './components/UI/Header'
import UserDataForm from './components/UserDataForm'

function App() {

  const [usersState, setUsersState] = useState({
    selectedUserId: undefined,
    usersData: [
      {
        id: Math.random(),
        name: "Igor Gagliardi de Moraes",
        position: "Intern",
        adress: "Fake Adress 234",
        city: "Fake City",
        state: "fake State",
        country: "fake Country",
        email: "fakeemail@gmail.com",
        phone: "123 456 789",
        passport: "AB121399",
        birthDate: "09-12-1998"
      },
      {
        id: Math.random(),
        name: "Pedro Lucas",
        position: "CEO",
        adress: "Fake Adress 123",
        city: "Fake City22",
        state: "fake State22",
        country: "fake Country22",
        email: "fakeemail22@gmail.com",
        phone: "222 456 789",
        passport: "CD121399",
        birthDate: "22-12-1998"
      },
    ]
  })
  const modal = useRef()
  
  function openAddUserModal(){
    modal.current.open()
  }

  function handleSelectedUser(id){
    setUsersState(prevState => {
      return {
        ...prevState,
        selectedUserId: id,
      }
    })
  };

  function addUserHandle(userData){
    setUsersState(prevState => {
      const newUser = {
        ...userData,
        id: Math.random()
      }
      return {
        ...prevState,
        selectedUserId: undefined,
        usersData: [...prevState.usersData, newUser]
      }
    })
  }

  const selectedUser = usersState.usersData.find(user => user.id === usersState.selectedUserId)

  let content = (
    <SelectedUser 
    userInfo={selectedUser} 
    profilePhoto={profilePhoto}
    />
  )



 if (usersState.selectedUserId === undefined){
  content = <NoSelectedUser />
 } 

  return (
    <>
    <Header />
    <main className='p-4'>

      <AddUserModal ref={modal} onAddUser={addUserHandle} />

     
      <div  className='flex'>
        <div className='w-full md:w-1/2 sm:w-1/2'>
          <UsersList userData={usersState.usersData} profilePhoto={profilePhoto} onSelectedUser={handleSelectedUser} />
        </div>

        <div className='w-full md:w-1/2 sm:w-1/2'>
          {content}
        </div>
      </div>
      <p className='p-2 m-2 sticky bottom-0 inline-block'>
        <button onClick={openAddUserModal} 
        className='p-2 w-28 text-sx md:text-base rounded-md bg-[#d9d9d9] text-black hover:bg-[#F2F2F2] hover:font-semibold transition-all shadow-customShadow '>+ Add</button>
      </p>
    </main>
    </>
  )
}

export default App
