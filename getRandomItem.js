const getRandomItem = () => {
    const arr = ['rock', 'paper', 'scissors'];
    const maxNum = 3;
    const minNum = 0;
    const getRandomNumber = Math.floor(Math.random() * maxNum) + minNum;
    
    if (getRandomNumber === 0) {
        return arr[0];
    }
    if (getRandomNumber === 1) {
        return arr[1];
    }
    if (getRandomNumber === 2) {
        return arr[2];
    }
};
getRandomItem();