document.getElementById("RoomTimetableForm").addEventListener("submit", async (event)=>{
    event.preventDefault();
    var formData = new FormData(event.target);


    const result = await fetch("https://vm.nathoro.ru/timetable/by-room/" + encodeURIComponent(formData.get("room")));
    const data = await result.json();

    const wrapper = document.getElementById("timetable-wrapper");
    
    renderWeek(data[0], wrapper);
    renderWeek(data[1], wrapper);
});

var renderWeek = (data, wrapper) => {
    var table = document.createElement("table");

    table.innerHTML = `
                        <tr>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                        </tr>
    `;

    data.days.forEach(day => {
        var week = document.createElement('tr');

        day.lessons.forEach(lesson => {
            if(lesson === null){
                week.innerHTML += `<td>-<td>`;
            }else{
                week.innerHTML += `<td>${lesson.group.name}<td>`;
            }
        });

        table.append(week)
    });

    wrapper.append(table);
}