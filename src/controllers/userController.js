// 用户控制器

// 获取用户列表
const getUsers = (req, res) => {
  // 模拟用户数据
  const users = [
    {
      id: 1,
      name: '张三',
      email: 'zhangsan@example.com',
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      name: '李四',
      email: 'lisi@example.com',
      createdAt: new Date().toISOString()
    },
    {
      id: 3,
      name: '王五',
      email: 'wangwu@example.com',
      createdAt: new Date().toISOString()
    }
  ];

  res.status(200).json({
    success: true,
    data: users,
    message: '获取用户列表成功',
    total: users.length
  });
};

// 根据ID获取用户
const getUserById = (req, res) => {
  const { id } = req.params;
  
  // 模拟数据查询
  const user = {
    id: parseInt(id),
    name: '张三',
    email: 'zhangsan@example.com',
    createdAt: new Date().toISOString()
  };

  res.status(200).json({
    success: true,
    data: user,
    message: `获取用户ID ${id} 成功`
  });
};

// 创建用户
const createUser = (req, res) => {
  const { name, email } = req.body;
  
  // 模拟创建用户
  const newUser = {
    id: Date.now(),
    name,
    email,
    createdAt: new Date().toISOString()
  };

  res.status(201).json({
    success: true,
    data: newUser,
    message: '创建用户成功'
  });
};

// 更新用户
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  
  // 模拟更新用户
  const updatedUser = {
    id: parseInt(id),
    name: name || '张三',
    email: email || 'zhangsan@example.com',
    updatedAt: new Date().toISOString()
  };

  res.status(200).json({
    success: true,
    data: updatedUser,
    message: `更新用户ID ${id} 成功`
  });
};

// 删除用户
const deleteUser = (req, res) => {
  const { id } = req.params;
  
  res.status(200).json({
    success: true,
    message: `删除用户ID ${id} 成功`
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
