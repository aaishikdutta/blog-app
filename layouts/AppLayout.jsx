const AppLayout = ({children}) => {
    return (
        <div className="flex flex-col min-w-[100vh]">
            {children}
        </div>
    )
}

export default AppLayout;