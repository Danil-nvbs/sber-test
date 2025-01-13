module.exports = {
    tourism: () => {
        let getRandom = () => +(Math.random() * 10000).toFixed(2)
        return {
            "Личный транспорт": getRandom(),    
            "Аптеки": getRandom(),
            "Предоставление услуг": getRandom(),
            "Развлечения": getRandom(),
            "Средства размещения": getRandom(),
            "Транспорт": getRandom(),
            "Непродовольственные магазины": getRandom(),
            "Кафе/бары/рестораны": getRandom(),
            "Продовольственные магазины": getRandom(),
            "Прочее": getRandom(),
        }
    }

}