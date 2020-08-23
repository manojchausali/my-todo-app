import React from 'react'

function ToDo(props){
	const onCompleted={
		'fontStyle':'italic',
		'textDecoration':'line-through',
		'color':'grey'
	}
	return <div className='card'>
		
		<input type='checkbox' name='check' checked={props.data.completed} onChange={
			(event) => props.handleChange(event,props.data.id)
			}/>
		<input style={props.data.completed?onCompleted:null} name='edit' value={props.data.todo}
			onChange={(event) => props.handleChange(event,props.data.id)}>
		</input>
		<button name='remove' onClick={
			(event) =>props.handleChange(event,props.data.id)
			}>
			Remove
		</button>
		
		
	</div>
}

export default ToDo