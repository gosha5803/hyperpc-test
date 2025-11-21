import { ProductsGridContainer } from "@/widgets/Posts/ProductsGridContainer";

const Home = () => {
    return (
        <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
            <main className="flex min-h-screen w-full xl:max-w-7xl flex-col items-center justify-between py-32 px-4 dark:bg-black sm:items-start">
                <ProductsGridContainer />
            </main>
        </div>
    );
};

export default Home;
