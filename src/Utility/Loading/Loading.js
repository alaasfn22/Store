
const Loading = () => {
    return (
        <div className="text-center py-4">
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm mx-1" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    )
}

export default Loading