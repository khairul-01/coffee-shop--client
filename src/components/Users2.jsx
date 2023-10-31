import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const Users2 = () => {

   const {isPending, isError, error, data: users} = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         const res = await fetch('http://localhost:5000/user')
         return res.json();
      }
   })

   const handleDelete = (id) => {
      console.log(id);
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then(result => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/user/${id}`, {
               method: 'DELETE',
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                     Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        // console.log('delete confirmed'),

                     )
                     // const remaining = users.filter(usser => usser._id !== id);
                     //   setUsers(remaining);
                  }
               })
         }
      })
   }
   if(isPending){
      return (
         <div className="flex justify-center">
            <span className="loading loading-spinner text-error mt-9 "></span>
         </div>
         
      )
   }
   if(isError){
      return <p>{error.message}</p>
   }
   return (
      <div>
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th></th>
                     <th>Email</th>
                     <th>Created At</th>
                     <th>lastLoggedAt</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {/* row 1 */}
                  {
                     users.map(user => <tr key={user._id}>
                        <th>1</th>
                        <td>{user.email}</td>
                        <td>Quality Control Specialist</td>
                        <td> {user.lastLoggedAt} </td>
                        <td>
                           <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                        </td>
                     </tr>)
                  }

               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Users2;