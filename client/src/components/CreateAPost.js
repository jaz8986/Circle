import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default function CreateAPost({ setFormData, formData, currentUser, handleFormSubmit, errors}) {

    const { img, description } = formData

    function handleFormChange (e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

  return (
    <div>
       
            <Card>
                <Card.Content>
                    <Card.Header>@{currentUser.username}</Card.Header>
                </Card.Content>
                    <Image src={img} wrapped ui={false} />
                <Card.Content>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
            </Card>
        <form class='ui form' onSubmit={handleFormSubmit}>
            <label>Image Url</label>
                <input type="text" onChange={handleFormChange} value={img} name='img' placeholder=''/>

            <label>Description</label>
                <input type="text"  onChange={handleFormChange} value={description} name='description' placeholder=''/>
            <button type='submit' className='ui button' >Post</button>
            {errors.length > 0 && (
                <div style={{ color: "red" }}>
                {errors.map((error) => (
                    <div key={error}>{error}</div>
                ))}
                </div>
            )}
        </form>
    </div>
  )
}
