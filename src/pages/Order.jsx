export default function Order({ order }) {

    const [products, setProducts] = useState([]);

    const getProductDetails = async (product_id) => {
        axios.get(apiUrl + '/products/' + product_id, {
        }).then(response => {
            setProducts((products) => products.push(response.data.product));
        });
    };

    useEffect(() => {
        order.details.map((detail) => {
            getProductDetails(detail.product_id);
        })
    }, [])

    return (
        <div className="border-solid border-2 border-sky-500 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => {
                <div className="group">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="object-cover object-center w-full h-full group-hover:opacity-75"
                        />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </div>
            })
            }
        </div>
    );
}