import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const SingleCoffee = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = (coffeeId) => {
        console.log(coffeeId);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${coffeeId}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coffee => coffee._id !== coffeeId);
                            setCoffees(remaining);
                        }
                    })
            }
        });

    }

    return (
        <div className="bg-[#ecebe8] rounded shadow-md">
            <div className="flex items-center justify-evenly">
                <div>
                    <img src={photo} alt="coffee" />
                </div>
                <div className="mr-3">
                    <p><b>Name:</b> {name}</p>
                    <p><b>Quantity:</b> {quantity}</p>
                    <p><b>Supplier:</b> {supplier}</p>
                    <p><b>Taste:</b> {taste}</p>
                </div>
                <div className="flex flex-col gap-3 ">
                    <button className="btn btn-primary">View</button>
                    <Link to={`updateCoffee/${_id}`}><button className="btn btn-secondary">Edit</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete</button>
                </div>
            </div>

        </div>
    );
};

export default SingleCoffee;