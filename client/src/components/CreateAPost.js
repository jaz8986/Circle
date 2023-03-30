import React from 'react'
import { Card, Grid, Image, Placeholder, Segment, Divider } from 'semantic-ui-react'

export default function CreateAPost({ setFormData, formData, currentUser, handleFormSubmit, errors}) {

    const { img, description } = formData

    function handleFormChange (e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

  return (
    <div style={{margin: '20px'}} >
    <Segment>
    <Grid columns={2} relaxed='very' >
        <Grid.Column>
            <Card centered>
                <Card.Content>
                    <Card.Header>
                        <Image src={currentUser.profile_img} avatar/>
                        {currentUser.username}
                    </Card.Header>
                </Card.Content>
                    {img ? <Image src={img} wrapped ui='true' /> : 
                    <Placeholder style={{ height: 300, width: 290 }}>
                        <Placeholder.Image />
                    </Placeholder>
                        }
                <Card.Content>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
        <Grid.Column  >
            <form class='ui form' onSubmit={handleFormSubmit}>
                <label>Image Url</label>
                    <input type="text" onChange={handleFormChange} value={img} name='img' placeholder=''/>

                <label>Description</label>
                    <input type="text"  onChange={handleFormChange} value={description} name='description' placeholder=''/>
                <button type='submit' className='ui button' style={{margin: "10px"}} >Post</button>
                {errors.length > 0 && (
                    <div style={{ color: "red" }}>
                    {errors.map((error) => (
                        <div key={error}>{error}</div>
                    ))}
                    </div>
                )}
            </form>
        </Grid.Column>
    </Grid>
    <Divider vertical></Divider>
    </Segment>
    </div>
  )
}
