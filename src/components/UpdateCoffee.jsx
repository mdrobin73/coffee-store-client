import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = (event) => {

        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(updatedCoffee);
        // form.reset();

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }

    return (
        <div className="bg-[#ff94ab] p-10 md:w-2/4 mx-auto space-y-8 my-8 rounded shadow-lg">
            <h2 className="text-3xl font-extrabold text-center">Update a Coffee : {name}</h2>
            
            <form onSubmit={handleUpdateCoffee}>
                {/* Form Name and Quantity row */}
                <div className="md:flex gap-6 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={name} placeholder="Coffee Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" defaultValue={quantity} placeholder="Available Quantity" name="quantity" className="input input-bordered" required />
                    </div>
                </div>

                {/* Form Supplier and Taste row */}
                <div className="md:flex gap-6 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" defaultValue={supplier} placeholder="Supplier Name" name="supplier" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" defaultValue={taste} placeholder="Taste" name="taste" className="input input-bordered" required />
                    </div>
                </div>

                {/* Form Category and Details row */}
                <div className="md:flex gap-6 md:mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" defaultValue={category} placeholder="Category" name="category" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" defaultValue={details} placeholder="Details" name="details" className="input input-bordered" required />
                    </div>
                </div>

                {/* Form Photo URL row */}
                <div className="mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" defaultValue={photo} placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>
                </div>

                {/* Form Submit button */}
                <input className="btn btn-block" type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;