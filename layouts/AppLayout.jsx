const AppLayout = ({children}) => {
    return (
        <div className="flex flex-col min-h-[100vh]">
            {children}
        </div>
    )
}

export default AppLayout;