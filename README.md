# 增量大脑设计部 - 作品展示与管理平台

专为设计团队打造的轻量级作品展示与管理平台，服务于线下汇报场景。

## 功能特性

### 前端展示
- 🎨 现代化简约设计，适配大屏展示
- 📁 作品集卡片式布局，悬浮动效
- 🖼️ 瀑布流图片展示，灯箱放大预览
- 📋 一键复制作品名称，方便汇报使用
- 📱 响应式设计，PC端优先

### 后台管理
- 🔐 简易密码登录保护
- 📦 作品集创建、编辑、删除
- ⬆️ 图片批量上传，拖拽支持
- ✏️ 主题命名快速编辑
- 💾 一键导出JSON数据备份

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看首页。

### 管理后台

访问 [http://localhost:3000/admin](http://localhost:3000/admin)

默认登录密码：`admin123`

## 部署到 Vercel

### 方法一：GitHub 部署（推荐）

1. 将代码推送到 GitHub 仓库
2. 登录 [Vercel](https://vercel.com)
3. 点击 "New Project"
4. 导入你的 GitHub 仓库
5. 点击 "Deploy"

### 方法二：本地部署

```bash
npm install -g vercel
vercel
```

## 生产环境注意事项

⚠️ **重要提示**：Vercel 免费版无持久化存储

1. **图片存储**：免费部署时，上传的图片在服务器重启后会丢失。建议：
   - 使用 Vercel Pro 的 Blob 存储
   - 或使用云存储（如 AWS S3、Cloudflare R2）

2. **数据备份**：定期使用后台「数据导出」功能备份 JSON 数据

3. **数据恢复**：部署新实例后，可通过重新上传 JSON 恢复数据（需额外开发导入功能）

## 项目结构

```
├── app/
│   ├── api/              # API 路由
│   │   ├── collections/  # 作品集 CRUD
│   │   ├── images/       # 图片上传管理
│   │   ├── config/       # 网站配置
│   │   ├── auth/         # 登录认证
│   │   └── export/       # JSON 导出
│   ├── admin/            # 管理后台
│   ├── works/            # 作品集详情页
│   └── page.tsx          # 首页
├── components/           # React 组件
├── lib/                  # 工具函数和数据层
├── data/                 # 数据存储目录
│   └── site-data.json    # 数据文件
└── public/uploads/       # 上传图片目录
```

## 自定义配置

### 修改默认密码

1. 进入管理后台 → 网站设置
2. 修改管理密码

### 修改网站标题

1. 进入管理后台 → 网站设置
2. 修改网站标题和 Slogan

## 技术栈

- **框架**：Next.js 14 (App Router)
- **样式**：Tailwind CSS
- **状态管理**：React hooks
- **数据存储**：JSON 文件
- **部署**：Vercel

## License

MIT
