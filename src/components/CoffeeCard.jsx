import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
   const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

   const handleDelete = id => {
      console.log(id)
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {

            fetch(`http://localhost:5000/coffee/${id}`, {
               method: 'DELETE'
            })
                  .then(res => res.json())
                  .then(data => {
                     console.log(data);
                     if(data.deletedCount>0){
                        Swal.fire(
                           'Deleted!',
                           'Your file has been deleted.',
                           'success'
                          // console.log('delete confirmed'),
                          
                       )
                       const remaining = coffees.filter(cof => cof._id !== id);
                       setCoffees(remaining);
                     }
                  })
            
         }
      })
   }
   return (
      <div>
         <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex w-full justify-between">
               <div>
                  <h2 className="card-title">{name}</h2>
                  <p>{quantity}</p>
                  <p>{supplier}</p>
                  <p>{taste}</p>
               </div>

               <div className="card-actions justify-end">
                  <div className="btn-group btn-group-vertical space-y-2">
                     <button className="btn btn-success">View</button>
                     <Link to={`updateCoffee/${_id}`}><button className="btn btn-success">Edit</button></Link>
                     <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-success bg-orange-400">X</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CoffeeCard;