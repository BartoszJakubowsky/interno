export default function Theme({setTheme}) {

    interface Options {icon: string, text: string}

    const themeOptions :Options[]= 
    [
     {
        icon: 'light',
        text: 'jasny'
    },
    {
        icon: 'dark',
        text: 'ciemny'
    },
    {
        icon: 'desktop-outline',
        text : 'system'
    }
    ]
    // const handleClick = () =>
    // {

    // }
    const handleClick = (theme: string) => setTheme(theme);

    return (
        <div>
            {themeOptions.map(theme =>
                {
                    return (
                    <div key={theme.text} className="flex flex-row">
                        <p>{theme.text}</p>
                        <button onClick={()=>handleClick(theme.icon)}>button</button>
                    </div>
                    )
                })}
        </div>
    )
    
}
