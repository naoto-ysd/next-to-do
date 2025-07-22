import TodoList from "@/components/TodoList";
import Message from "@/components/Message";
import MyCarousel from "@/components/MyCarousel";

export default function Home() {
  return (
    <>
      <header className="bg-blue-600 text-white py-4">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Next.js TODOアプリ</h1>
        </div>
      </header>
      <main className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <TodoList />
          <Message />
          <MyCarousel />
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2025 TODOアプリ</p>
        </div>
      </footer>
    </>
  );
}
