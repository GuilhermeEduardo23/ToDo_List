//Componente funcional para exibir o dia da semana e a data formatada.
const FormattedDate = () => {
    const date = new Date();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() > 10 ? `0${date.getMonth() + 1}` : `0${date.getMonth() + 1}`;
    const year = date.getFullYear();
    const weekDay = date.getDay();
    const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const week = weekDays[weekDay];
    
    return (
      <span className="date">
        {`${week}, ${day}/${month}/${year}`}
      </span>
    )
}

export default FormattedDate;