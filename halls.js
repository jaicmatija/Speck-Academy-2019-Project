const halls = [];
let nextId = 1;

function add(name) {
    const hall = {
        id: nextId,
        name: name,
        reservation: {
            isReserved: false,
            reservedFrom: null,
            reservedUntil: null
        }
    };

    nextId += 1;
    halls.push(hall);

    return hall;
}

function getIndex(id) {
    let index;
    for (let i = 0; i < halls.length; i++) {
        const hall = halls[i];
        if (hall.id === id) {
            index = i;
            break;
        }
    }
    return index;
}

function remove(id) {
    const index = getIndex(id);
    if (index === undefined) {
        return false;
    }

    halls.splice(index, 1);
    return true;
}

function update(id, isReserved, reservedFrom, reservedUntil) {
    if (reservedFrom >= reservedUntil) {
        alert('reservedFrom cant be after reserved until');
        return false;
    }

    const index = getIndex(id);
    if (index === undefined) {
        return false;
    }

    const hall = halls[index];
    hall.reservation.isReserved = isReserved;
    hall.reservation.reservedFrom = isReserved ? reservedFrom : null;
    hall.reservation.reservedUntil = isReserved ? reservedUntil : null;

    return true;
}

function init() {
    const dvoranaGradskeKnjizice = add('Dvorana Gradske knjižnice');
    add('Konferencijske dvorane RCTP (Razvojni centar i tehnološki park)');
    add('Dvorana Hrvatskog doma');
    add('Dvorana TIC (Turistički dom)');
    add('Velika sportska dvorana');

    update(dvoranaGradskeKnjizice.id, true, new Date(2019, 3, 25, 10), new Date(2019, 3, 25, 12));
}

module.exports = {
    halls,
    init,
    add,
    update,
    remove
};