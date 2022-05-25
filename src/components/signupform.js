import React from 'react'

const Signupform = () => {
    const[formData,setFormData] = React.useState({
        email:"",
        password:"",
        confirmPassword:"",
        joinToNewsletter:true
        });

        function handleChange(event){
          const{name,type,checked,value}=event.target;
          setFormData(prevState =>({
              ...prevState,
              [name]:type === "checkbox" ? event.target.checked :event.target.value
                      }));
        }

        function handleSubmit(event){
          event.preventDefault();
          console.log("pass:",formData.email,"confpaas:",formData.confirmPassword);
          if(formData.password === formData.confirmPassword){
              console.log("signup successfully!!");
          }else{
              console.log("Password don't match!!");
              return
          }
          if(formData.joinToNewsletter){
              console.log("Thanks for signing up for our newsletter!");
          }
        }
  return (
    <div className='container'>
        <form className='signup-form' onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder='email'
            className='sign-input'
            name='email'
            value={formData.email}
            onChange={handleChange}
            />
            <input
            type="text"
            placeholder='password'
            className='sign-input'
            name='password'
            value={formData.password}
            onChange={handleChange}
            />
            <input
            type="text"
            placeholder='confirm password'
            className='sign-input'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            />
           <div className='market-container'> <input
            type="checkbox"
            id='okToEmail'
            name='joinToNewsletter'
            checked={formData.joinToNewsletter}
            onChange={handleChange}
            />
            <label htmlFor='okToEmail'name ="label">I want to join newsletter!!</label>
            </div>
            <button className='form-btn'>Submit</button>

        </form>
    </div>
  )
}

export default Signupform
