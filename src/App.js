import React, {useState} from 'react';
import './App.css';

function App() {
  const arrGender = [
    {
      "value": "Masculino"
    },
    {
      "value": "Femenino"
    }
  ]
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const[idCard, setIdCard] = useState('');
  const[birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const[section, setSection] = useState('');
  const [users, setUsers] = useState([]);

  const [editName, setEditName] = useState('');
  const [editLastName, setEditLastName] = useState('');
  const[editIdCard, setEditIdCard] = useState('');
  const[editBirth, setEditBirth] = useState('');
  const [editGender, setEditGender] = useState('');
  const[editSection, setEditSection] = useState('');

  const handleDelete = (index,e) => {
    setUsers(users.filter((v, i) => i !== index));
  }

  const addUsers = () => {
    if(name === "") {
      alert(`Ingrese el nombre`)
    }
    else if(lastName === "") {
      alert(`Ingrese el apellido`)
    }
    else if(idCard === "") {
      alert(`Ingrese su cedula`)
    }
    else if(birth === "") {
      alert(`Ingrese su fecha de nacimiento`)
    }
    else if(gender === "") {
      alert(`Seleccionar genero`)
    }
    else if(section === "") {
      alert(`Seleccionar seccion`)
    }
    else {
      const jsn = {
        "name": name,
        "lastName": lastName,
        "idCard": idCard,
        "birth": birth,
        "gender": gender,
        "section": section
      }
      
      console.log(jsn);
      const arrUsers = [...users];
      arrUsers.push(jsn);
      setUsers(arrUsers);
     

      setName("");
      setLastName('');
      setIdCard('');
      setBirth('');
      setGender('');
      setSection('');
    }
  }

  const editUsers = () =>{
    if(editName === "") {
      alert(`Ingrese el nombre`)
    }
    else if(editLastName === "") {
      alert(`Ingrese el apellido`)
    }
    else if(editIdCard === "") {
      alert(`Ingrese su cedula`)
    }
    else if(editBirth === "") {
      alert(`Ingrese su fecha de nacimiento`)
    }
    else if(editGender === "") {
      alert(`Seleccionar genero`)
    }
    else if(editSection === "") {
      alert(`Seleccionar seccion`)
    }
    else {
      const jsn = {
        "name": editName,
        "lastName": editLastName,
        "idCard": editIdCard,
        "birth": editBirth,
        "gender": editGender,
        "section": editSection
      }
      
      console.log(jsn);
      const arrUsers = [...users];
      arrUsers.map((u) => (u.name = editName, u.lastName = editLastName, u.idCard = editIdCard, u.birth = editBirth, u.gender = editGender, u.section = editSection) )
      setUsers(arrUsers);
     

      setEditName("");
      setEditLastName('');
      setEditIdCard('');
      setEditBirth('');
      setEditGender('');
      setEditSection('');
    }
  }
  

  return (
    <>
      <label style={{
        color: '#333',
        fontWeight: '600'
      }}>Nombre</label>
      <br />
      <input 
        value={name} 
        onChange={(val) => setName(val.target.value)}/>
      
      <br />
      <br />

      <label style={{
        color: '#333',
        fontWeight: '600'
      }}>Apellido</label>
      <br />
      <input 
        value={lastName} 
        onChange={(val) => setLastName(val.target.value)}/>
      <br /><br />

      <label style={{
        color: '#333',
        fontWeight: '600'
      }}>Cedula</label>
      <br />
      <input 
        value={idCard} 
        onChange={(val) => setIdCard(val.target.value)}/>
      <br /><br />

      <label style={{
        color: '#333',
        fontWeight: '600'
      }}>Fecha de nacimiento</label>
      <br />
      <input type="date"
        value={birth} 
        onChange={(val) => setBirth(val.target.value)}/>
      <br /><br />


      <label style={{
        color: '#333',
        fontWeight: '600'
      }}>Genero</label>
      <br />
      <select
        value={gender}
        onChange={(val) => setGender(val.target.value)}>
        <option value="">Seleccionar</option>
        {
          arrGender.map( (gender, index) => (
            <option key={index} value={gender.value}> {gender.value} </option>
          ))
        }
      </select>
    
      <br /><br />

      <label style={{
        color: '#333',
        fontWeight: '600'
      }}>Seccion</label>
      <br />
      <select
        value={section}
        onChange={(val) => setSection(val.target.value)}>
        <option value="">Seleccionar</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
    
      <br /><br />

      <button onClick={() => addUsers()} type="button" className="btn btn-primary">Agregar</button>

      <br /><br />
      <table>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Sexo</th>
          <th>Seccion</th>
          <th>Opciones</th>
        </tr>
        {
        users.map((u,index) => (
        <tr key={index}>
          <td>{u.name}</td>
          <td>{u.lastName}</td>
          <td>{u.gender}</td>
          <td>{u.section}</td>
          <td><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Ver</button> <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Editar</button> <button onClick={e => handleDelete(index,e)} type="button" className="btn btn-primary">Eliminar</button> </td>
        </tr>
        ))
        }
      </table>

      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Datos completos</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <table>
               <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cedula</th>
              <th>Fecha de nacimiento</th>
              <th>Sexo</th>
              <th>Seccion</th>
              <th></th>
            </tr>
            {
            users.map((u,index) => (
            <tr key={index}>
              <td>{u.name}</td>
              <td>{u.lastName}</td>
              <td>{u.idCard}</td>
              <td>{u.birth}</td>
              <td>{u.gender}</td>
              <td>{u.section}</td>
            </tr>
        ))
        }
            </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Editar</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
           <label style={{
            color: '#333',
            fontWeight: '600'
          }}>Nombre</label>
          <br />
          <input 
            value={editName} 
            onChange={(val) => setEditName(val.target.value)}/>
          
          <br />
          <br />

          <label style={{
            color: '#333',
            fontWeight: '600'
          }}>Apellido</label>
          <br />
          <input 
            value={editLastName} 
            onChange={(val) => setEditLastName(val.target.value)}/>
          <br /><br />

          <label style={{
            color: '#333',
            fontWeight: '600'
          }}>Cedula</label>
          <br />
          <input 
            value={editIdCard} 
            onChange={(val) => setEditIdCard(val.target.value)}/>
          <br /><br />

          <label style={{
            color: '#333',
            fontWeight: '600'
          }}>Fecha de nacimiento</label>
          <br />
          <input type="date"
            value={editBirth} 
            onChange={(val) => setEditBirth(val.target.value)}/>
          <br /><br />


          <label style={{
            color: '#333',
            fontWeight: '600'
          }}>Genero</label>
          <br />
          <select
            value={editGender}
            onChange={(val) => setEditGender(val.target.value)}>
            <option value="">Seleccionar</option>
            {
              arrGender.map( (gender, index) => (
                <option key={index} value={gender.value}> {gender.value} </option>
              ))
            }
          </select>
        
          <br /><br />

          <label style={{
            color: '#333',
            fontWeight: '600'
          }}>Seccion</label>
          <br />
          <select
            value={editSection}
            onChange={(val) => setEditSection(val.target.value)}>
            <option value="">Seleccionar</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        
          <br /><br />
          </div>
          <div class="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button onClick={() => editUsers()} type="button" className="btn btn-primary">Guardar</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
