import './styles.css'

export function Card({name,time}) {
    return (
        <div className='Card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}