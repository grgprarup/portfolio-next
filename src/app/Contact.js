export default function Contact() {
    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                <form className="max-w-lg mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="px-4 py-2 bg-gray-800 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="px-4 py-2 bg-gray-800 rounded"
                        />
                    </div>
                    <textarea
                        placeholder="Message"
                        className="w-full px-4 py-2 mt-4 bg-gray-800 rounded"
                    />
                    <button className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
