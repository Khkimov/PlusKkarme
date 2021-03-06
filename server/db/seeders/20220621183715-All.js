const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        name: 'Pablo',
        password: await bcrypt.hash('123', 10),
        email: 'escobar@mail.ru',
        role: 'USER',
        phone: '79991234567',
        points: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Liza',
        password: await bcrypt.hash('123', 10),
        email: 'liza@mail.ru',
        role: 'USER',
        phone: '79991234568',
        points: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ramil',
        password: await bcrypt.hash('123', 10),
        email: 'ramil@mail.ru',
        role: 'USER',
        phone: '79991234569',
        points: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ilyas',
        password: await bcrypt.hash('123', 10),
        email: 'ilyas@mail.ru',
        phone: '79991234570',
        role: 'USER',
        points: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const categories = [
      { name: 'Помощь по дому', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Няньки/сиделки', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Животные', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Одолжить', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Репетиторство', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Транспорт', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Общение', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Красота и здоровье', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Фотосессии/видеосъемка', createdAt: new Date(), updatedAt: new Date() },

    ];

    const subcategories = [
      {
        name: 'Уборка', category_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Готовка', category_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Ремонт', category_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Посидеть с ребенком', category_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Позаботиться о пожилом человеке', category_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Выгул собаки', category_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Передержка котика', category_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Передержка пёсика', category_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Отдать даром', category_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Дать погонять', category_id: 4, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Помощь с д/з', category_id: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Профессиональные задачи', category_id: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Иностранные языки', category_id: 5, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Переезд', category_id: 6, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Ремонт(велик, скейт и тд)', category_id: 6, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Подвезти', category_id: 6, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Психологическая помощь', category_id: 7, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'просто поговорить', category_id: 7, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Прически/стрижка', category_id: 8, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Массаж', category_id: 8, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Макияж', category_id: 8, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Спорт', category_id: 8, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Фотосессии', category_id: 9, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Видеосъемка', category_id: 9, createdAt: new Date(), updatedAt: new Date(),
      },
    ];

    const tasks = [
      {
        name: 'Подружиться коту с собакой',
        creator_id: 1,
        podpisan_id: 2,
        description: 'Подружить кота Васю с соседским псом Мурой',
        img: 'https://www.spletnik.ru/img/__post/a1/0cea5c624b2daxl_a1ff3a1fa7c9e9ef6b1a11ea3ffca38c_672.jpg',
        subcategory_id: 1,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Подружиться барсу с тигром',
        creator_id: 2,
        podpisan_id: 1,
        description: 'Подружить тигра Волка с соседским барсом Гарегином',
        img: 'http://udivitelno.com/images/12/tigr-amur-i-kozel-timur-druzhba-khishchnika-i-zhertvy-20-foto-video/1-%D0%A2%D0%B8%D0%B3%D1%80%20%D0%90%D0%BC%D1%83%D1%80%20%D0%B8%20%D0%BA%D0%BE%D0%B7%D0%B5%D0%BB%20%D0%A2%D0%B8%D0%BC%D1%83%D1%80.JPG',
        subcategory_id: 1,
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const usersTasks = [
      {
        user_id: 1, task_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 2, task_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 1, task_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 3, task_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
    ];

    const messangers = [
      { task_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { task_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { task_id: 1, createdAt: new Date(), updatedAt: new Date() },
    ];

    const usersMessangers = [
      {
        user_id: 1, messanger_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 2, messanger_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 1, messanger_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 3, messanger_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 1, messanger_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        user_id: 4, messanger_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
    ];

    const messages = [
      {
        text: 'Привет, хочу помочь', user_id: 1, messanger_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        text: 'У меня есть классные очки, буду рад помоч', user_id: 1, messanger_id: 1, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        text: 'Окей', user_id: 1, messanger_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        text: 'Жду завтра', user_id: 4, messanger_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        text: '2 мессенджер', user_id: 1, messanger_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        text: 'Ага', user_id: 3, messanger_id: 2, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        text: 'Привет', user_id: 1, messanger_id: 3, createdAt: new Date(), updatedAt: new Date(),
      },

    ];

    await queryInterface.bulkInsert('Users', users);
    await queryInterface.bulkInsert('Categories', categories);
    await queryInterface.bulkInsert('Subcategories', subcategories);
    await queryInterface.bulkInsert('Tasks', tasks);
    await queryInterface.bulkInsert('UsersTasks', usersTasks);
    await queryInterface.bulkInsert('Messangers', messangers);
    await queryInterface.bulkInsert('UserMessangers', usersMessangers);
    await queryInterface.bulkInsert('Messages', messages);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Subcategories', null, {});
    await queryInterface.bulkDelete('Tasks', null, {});
    await queryInterface.bulkDelete('UsersTasks', null, {});
    await queryInterface.bulkDelete('Messangers', null, {});
    await queryInterface.bulkDelete('UsersMessangers', null, {});
    await queryInterface.bulkDelete('Messages', null, {});
  },
};
