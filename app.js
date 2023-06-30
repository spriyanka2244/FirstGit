function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.emailId.value;
    const phonenumber=event.target.phonenumber.value;
    // localStorage.setItem('name',name);
    // localStorage.setItem('email',email);
     //localStorage.setItem('phonenumber',phonenumber);
     const obj ={
        name,
        email,
        phonenumber
    }
    localStorage.setItem('userDetails',JSON.stringify(obj))
    showUserOnScreen(obj)

     }
     function showUserOnScreen(obj){
        const parentElem = document.getElementById('listofitems')
        const childElem = document.createElement('li')
        childElem.textContent=obj.name + ' - ' + obj.email + ' - ' + obj.phonenumber

        const deleteButton = document.createElement('input')
        deleteButton.type='button'
        deleteButton.value='Delete'
        deleteButton.onclick =() =>{
            localStorage.removeItem(obj.email)
            parentElem.removeChild(childElem)
        }
        
        const editButton = document.createElement('input')
        editButton.type='button'
        editButton.value='Edit'
        editButton.onclick =() =>{
            
            document.getElementById('choose').value = obj.choose
            document.getElementById('browser').value = obj.browser
            document.getElementById('choose1').value = obj.choose1
            
            localStorage.removeItem(obj.browser)
            parentElem.removeChild(childElem)

        }
        childElem.appendChild(deleteButton)
        childElem.appendChild(editButton)
        parentElem.appendChild(childElem)  
     }     
