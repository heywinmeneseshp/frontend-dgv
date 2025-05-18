import Header from "@/components/shared/Header";

// src/components/Layout.js
export default function Layout({ children }) {
    return (
        <>

            <Header></Header>
            <main style={{height: '79vh'}}>{children}</main>
          
        </>
    );
}
