import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

   const coffee = useLoaderData();
   const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

   const handleUpdateCoffee = e => {
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      const quantity = form.quantity.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;

      const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
      console.log(updatedCoffee);

      // send data to the server
      fetch(`http://localhost:5000/coffee/${_id}`, {
         method: 'PUT',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(updatedCoffee),
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.modifiedCount>0) {
               Swal.fire({
                  title: 'Success!',
                  text: 'Coffee updated successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
               })
            }
         })
   }
   return (
      <div className="px-72">
         <h1 className="text-3xl font-extrabold my-8">Update Coffee: {name} </h1>
         <form onSubmit={handleUpdateCoffee} className="space-y-8">
            {/*name and quantity form row */}
            <div className="flex">
               <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text">Coffee Name</span>
                  </label>
                  <label className="input-group">
                     <input type="text" defaultValue={name} placeholder="Coffee name" name="name" className="input input-bordered w-full" />
                  </label>
               </div>
               <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text">Available Quantity</span>
                  </label>
                  <label className="input-group">
                     <input type="text" defaultValue={quantity} placeholder="coffee quantity" name="quantity" className="input input-bordered w-full" />
                  </label>
               </div>
            </div>
            {/*supplier form row */}
            <div className="flex">
               <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text">Supplier</span>
                  </label>
                  <label className="input-group">
                     <input type="text" defaultValue={supplier} placeholder="Supplier name" name="supplier" className="input input-bordered w-full" />
                  </label>
               </div>
               <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text">Taste</span>
                  </label>
                  <label className="input-group">
                     <input type="text" defaultValue={taste} placeholder="Taste" name="taste" className="input input-bordered w-full" />
                  </label>
               </div>
            </div>
            {/* form category and details row */}
            <div className="flex">
               <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text">Category</span>
                  </label>
                  <label className="input-group">
                     <input type="text" defaultValue={category} placeholder="Category name" name="category" className="input input-bordered w-full" />
                  </label>
               </div>
               <div className="form-control md:w-1/2">
                  <label className="label">
                     <span className="label-text">Details</span>
                  </label>
                  <label className="input-group">
                     <input type="text" defaultValue={details} placeholder="details" name="details" className="input input-bordered w-full" />
                  </label>
               </div>
            </div>
            {/* form photo url row */}
            <div className="">
               <div className="form-control w-full">
                  <label className="label">
                     <span className="label-text">Photo URL</span>
                  </label>
                  <label className="input-group">
                     <input type="text" defaultValue={photo} placeholder="Photo url" name="photo" className="input input-bordered w-full" />
                  </label>
               </div>

            </div>
            <input className="btn btn-block bg-gray-700 text-white" type="submit" value="Update coffee" />
         </form>
      </div>
   );
};

export default UpdateCoffee;