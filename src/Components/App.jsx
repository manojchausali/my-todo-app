import React from 'react'
import ToDo from './todo'
import tododata from './tododata'

class App extends React.Component{
	constructor(){
		super()
		this.state={
			todo:tododata,
			newItem:{
				id:'',
				todo:'',
				completed:false
			}
		}
		this.handleSubmit=this.handleSubmit.bind(this)
		this.handleChange=this.handleChange.bind(this)
	}
	handleChange(event,id){
		const todo=event.target.value
		const name=event.target.name
		if(name==='check'){
			this.setState(function(prevState){
				const updatedToDo=prevState.todo.map(function(item){
					if(item.id===id){
						item.completed=!item.completed
					}
					return item
				})
				return {todo:updatedToDo}
			})
		}
		else if(name==='remove'){
			this.setState(function(prevState){
				const updatedToDo=prevState.todo.filter(function(item){
					if(item.id!==id) return item
				})
				return {todo:updatedToDo}
			})
		}
		else if(name==='edit'){
			this.setState(function(prevState){
				const updatedToDo=prevState.todo.map(function(item){
					if(item.id===id){
						item.todo=todo
					}
					return item
				})
				return {todo:updatedToDo}
			})
		}
		else{
				if(todo!==''){
				this.setState({
					newItem:{
						id:Date.now(),
						todo:todo
					}
				})
			}
		}
		
	}
	handleSubmit(e){
		e.preventDefault()
		const newItem=this.state.newItem
		if(newItem.todo!==''){
			const updatedToDo=[...this.state.todo, newItem]
			this.setState({todo:updatedToDo})
			this.setState({newItem:{
				id:'',
				todo:'',
				completed:false
			}})
		}
			
	}

	render(){
		const fn=this.handleChange.bind(this)
		const todo=this.state.todo.map(function(objectintododata){
			return <ToDo key={objectintododata.id} data={objectintododata} handleChange={fn}/>
		})
		return <div className='App'>
			<form id='addNew' onSubmit={this.handleSubmit}>
				<input type='text' name='add' placeholder="Enter new task" onChange={this.handleChange} />
				<button>Add</button>
			</form>
			{todo}
		</div>
	}

}

export default App