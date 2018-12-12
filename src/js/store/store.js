const getState = (scope) => {
    return {
        store: {
        //this is where your store data lives
        contacts: [
				{
					name: "Jane Summer",
					email: "Summer@jane.com",
					phone: "123-456-7890",
					address:"ABC Drive",
					image:"http://demos.themes.guide/bodeo/assets/images/users/w100.jpg"
				},
				{
					name: "Jimmy Jones",
					email: "Jones@jimmy.com",
					phone: "123-456-7272",
					address:"xyz Drive",
					image:"http://demos.themes.guide/bodeo/assets/images/users/m100.jpg"
				},
				{
					name: "Marc Andrew",
					email: "Andrew@marc.com",
					phone: "234-534-5343",
					address:"123 Street",
					image:"http://demos.themes.guide/bodeo/assets/images/users/m105.jpg"
					
				}
			],
			images:
			["http://demos.themes.guide/bodeo/assets/images/users/m100.jpg", 
			"http://demos.themes.guide/bodeo/assets/images/users/w100.jpg"]
        },
        actions: {
            //(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
            addContact: (name,email,phone,address,props) => {
				let store = scope.state.store;
				let newContact={name:name,email:email,phone:phone,address:address,image:"http://demos.themes.guide/bodeo/assets/images/users/w100.jpg"};
				props.history.push("/");
				store.contacts.push(newContact);
				scope.setState({ store });
			},
			deleteElement:(index,props)=>{
				
				let store = scope.state.store;
				
				store.contacts.splice(index, 1);
				
				props.history.push("/");
				
				scope.setState({ store });
				
			},
			updateElement:(index,name,email,phone,address,props)=>{
				
				let store = scope.state.store;
				let updatedContact={name:name,email:email,phone:phone,address:address,image:"http://demos.themes.guide/bodeo/assets/images/users/w100.jpg"};
				store.contacts.splice(index, 1,updatedContact);
				
				props.history.push("/");
				
				scope.setState({ store });
				
			},
			getPicture: (status)=>{
				
				switch (status) {
					case 'woman':
					return "http://demos.themes.guide/bodeo/assets/images/users/m100.jpg";
					case 'man':
					return 'http://demos.themes.guide/bodeo/assets/images/users/w100.jpg';
					default:
					return 'http://demos.themes.guide/bodeo/assets/images/users/w100.jpg';
				}
  }
        }
    };
};

export default getState;

