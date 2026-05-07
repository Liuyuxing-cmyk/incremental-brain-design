# 增量大脑设计部 - 项目技术规范

## 1. Concept & Vision

**项目定位**：专为设计团队打造的轻量级作品展示与管理平台，服务于线下汇报场景，兼顾专业展示与便捷管理。

**核心理念**：简约不简单，用克制的设计语言让作品本身成为主角。后台管理高效直观，前端展示大气专业。

**视觉基调**：现代商务简约风，黑白灰主色调，低饱和度中性色辅助，营造专业、清爽、值得信赖的视觉感受。

---

## 2. Design Language

### 2.1 色彩系统

| 用途 | 色值 | 说明 |
|------|------|------|
| 主背景 | `#FAFAFA` | 页面底色，柔和不刺眼 |
| 卡片背景 | `#FFFFFF` | 内容卡片纯白突出 |
| 主文字 | `#1A1A1A` | 标题、重要文字 |
| 次要文字 | `#666666` | 描述文字、辅助信息 |
| 边框线 | `#E5E5E5` | 分割线、卡片边框 |
| 主强调色 | `#2563EB` | 按钮、链接、重要交互 |
| 成功色 | `#10B981` | 成功提示、复制成功反馈 |
| 悬停态 | `#F3F4F6` | 按钮/卡片悬停背景 |
| 深色背景 | `#111827` | 管理后台深色区域、灯箱背景 |

### 2.2 字体系统

```
主字体：'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
中文字体：'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif
```

| 层级 | 字号 | 字重 | 行高 | 用途 |
|------|------|------|------|------|
| H1 | 48px | 700 | 1.2 | 首页大标题 |
| H2 | 32px | 600 | 1.3 | 页面标题 |
| H3 | 24px | 600 | 1.4 | 集合名称 |
| Body | 16px | 400 | 1.6 | 正文内容 |
| Small | 14px | 400 | 1.5 | 辅助说明 |
| Caption | 12px | 400 | 1.4 | 时间戳、微说明 |

### 2.3 间距系统

基础单位：4px
- `xs`: 4px （紧凑间距）
- `sm`: 8px （小间距）
- `md`: 16px （标准间距）
- `lg`: 24px （较大间距）
- `xl`: 32px （区块间距）
- `2xl`: 48px （页面边距）

### 2.4 动效规范

| 场景 | 动效类型 | 参数 |
|------|----------|------|
| 卡片悬停 | transform: scale(1.02) | 200ms ease-out |
| 按钮悬停 | background-color 变化 | 150ms ease |
| 图片加载 | opacity 0→1 | 300ms ease |
| 弹窗出现 | opacity + scale | 250ms ease-out |
| Toast提示 | slideIn + fade | 200ms ease |
| 复制成功 | 颜色闪烁 + bounce | 400ms |

---

## 3. Layout & Structure

### 3.1 前端展示页面

```
┌─────────────────────────────────────────────────────────┐
│  HEADER (固定顶部，高度80px)                              │
│  [Logo + 标题]                    [后台入口链接]          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  HERO SECTION (首页独有)                                │
│  ┌─────────────────────────────────────────────────┐    │
│  │  增量大脑设计部                                  │    │
│  │  用设计驱动增长，以作品证明实力                    │    │
│  │  [查看作品集 ↓]                                  │    │
│  └─────────────────────────────────────────────────┘    │
│                                                         │
│  COLLECTIONS GRID                                       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                │
│  │ 集合封面  │ │ 集合封面  │ │ 集合封面  │                │
│  │ 集合名称  │ │ 集合名称  │ │ 集合名称  │                │
│  │ 图片数量  │ │ 图片数量  │ │ 图片数量  │                │
│  └──────────┘ └──────────┘ └──────────┘                │
│                                                         │
│  FOOTER                                                  │
│  © 2024 增量大脑设计部                                   │
└─────────────────────────────────────────────────────────┘
```

### 3.2 集合详情页

```
┌─────────────────────────────────────────────────────────┐
│  [← 返回]  集合名称                                      │
├─────────────────────────────────────────────────────────┤
│  集合描述（可选）                                         │
├─────────────────────────────────────────────────────────┤
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                       │
│  │     │ │     │ │     │ │     │  瀑布流/网格布局        │
│  │ IMG │ │ IMG │ │ IMG │ │ IMG │                       │
│  │     │ │     │ │     │ │     │                       │
│  └─────┘ └─────┘ └─────┘ └─────┘                       │
│  图片悬浮显示：主题命名 + 复制按钮                         │
└─────────────────────────────────────────────────────────┘
```

### 3.3 后台管理页面

```
┌─────────────────────────────────────────────────────────┐
│  [Logo] 管理后台                    [前台预览] [退出登录] │
├─────────────────────────────────────────────────────────┤
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                │
│  │ 📁 集合   │ │ 📤 上传  │ │ 📥 导出  │                │
│  │ 管理      │ │ 图片     │ │ 数据     │                │
│  └──────────┘ └──────────┘ └──────────┘                │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  集合列表（可拖拽排序）                                   │
│  ┌─────────────────────────────────────────────────┐    │
│  │ ≡ 封面图  集合名称           描述     图片数 操作  │    │
│  │ ≡  [img] 品牌设计           品牌相关..  12   [编辑]│    │
│  │ ≡  [img] 活动KV             活动视觉..   8   [编辑]│    │
│  └─────────────────────────────────────────────────┘    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 4. Features & Interactions

### 4.1 前端展示功能

| 功能 | 交互行为 | 视觉反馈 |
|------|----------|----------|
| 首页加载 | 页面骨架屏 → 渐显内容 | 300ms fade-in |
| 集合卡片悬停 | scale(1.02) + 阴影加深 | 200ms ease-out |
| 集合卡片点击 | 跳转到集合详情页 | 页面切换 |
| 图片悬停 | 显示主题命名浮层 | 底部滑出遮罩 |
| 一键复制 | 点击复制按钮 | Toast: "已复制到剪贴板" |
| 图片灯箱 | 点击图片打开全屏 | 背景模糊 + 缩放动画 |
| 灯箱导航 | 左右箭头切换 | 滑动过渡 |
| 灯箱关闭 | 点击X或背景 | 渐隐消失 |

### 4.2 后台管理功能

| 功能 | 交互行为 | 视觉反馈 |
|------|----------|----------|
| 登录验证 | 输入密码 + 回车 | 加载动画 → 跳转或错误提示 |
| 创建集合 | 点击按钮 → 弹窗表单 | 提交后列表刷新 |
| 编辑集合 | 点击编辑 → 弹窗表单 | 修改后前端实时预览 |
| 删除集合 | 确认弹窗 → 删除 | 列表平滑移除 |
| 上传图片 | 拖拽区域 / 选择文件 | 进度条 + 缩略图预览 |
| 批量上传 | 多文件同时上传 | 并行进度条 |
| 编辑主题名 | 点击图片名 → 行内编辑 | 失焦保存 |
| 删除图片 | 点击删除 → 确认 | 图片淡出移除 |
| 导出JSON | 点击导出 → 生成下载 | 浏览器下载 + Toast提示 |
| 退出登录 | 点击退出 → 清除状态 | 跳转登录页 |

### 4.3 边界情况处理

| 场景 | 处理方式 |
|------|----------|
| 空集合（无图片） | 显示占位图 + "暂无作品" 提示 |
| 无集合 | 显示引导创建按钮 |
| 图片加载失败 | 显示占位图 + 重试按钮 |
| 上传失败 | 显示错误提示 + 重试按钮 |
| 登录失败 | 显示错误信息 + 清空密码 |
| 删除有图片的集合 | 二次确认弹窗 |
| 大图加载中 | 骨架屏占位 |

---

## 5. Component Inventory

### 5.1 展示端组件

| 组件 | 状态 | 描述 |
|------|------|------|
| Header | default | Logo + 标题 + 后台链接 |
| HeroSection | default | 大标题 + Slogan + CTA |
| CollectionCard | default/hover | 封面 + 名称 + 数量 |
| ImageGrid | default | 瀑布流/网格布局容器 |
| ImageCard | default/hover/loading | 图片 + 主题名 + 复制 |
| Lightbox | open/closed | 全屏图片查看器 |
| CopyButton | default/copied | 复制图标 + 成功状态 |
| Toast | success/error | 轻量提示消息 |
| Footer | default | 版权信息 |

### 5.2 管理端组件

| 组件 | 状态 | 描述 |
|------|------|------|
| AdminHeader | default | Logo + 导航 + 用户 |
| TabNav | active/inactive | 功能切换标签 |
| CollectionTable | default | 集合列表 + 操作按钮 |
| CollectionForm | create/edit | 集合创建/编辑表单 |
| ImageUploader | idle/uploading/done | 拖拽上传区 |
| ImageList | default | 上传图片列表 |
| ImageEditCard | default/editing | 行内编辑主题名 |
| ExportButton | idle/loading/done | JSON导出按钮 |
| Modal | open/closed | 通用弹窗容器 |
| ConfirmDialog | open/closed | 确认删除弹窗 |

---

## 6. Technical Approach

### 6.1 技术栈

| 层级 | 技术选型 | 理由 |
|------|----------|------|
| 框架 | Next.js 14 (App Router) | SSR/SSG支持，API Routes内置 |
| 样式 | Tailwind CSS | 快速开发，原子化样式 |
| 状态管理 | React useState/useContext | 轻量够用，无需Redux |
| 数据存储 | JSON文件 (data.json) | 简单可靠，易于导出备份 |
| 图片存储 | /public/uploads 目录 | 本地存储，Vercel需配置 |
| 部署 | Vercel | 免费托管，一键部署 |

### 6.2 数据模型

```typescript
// 作品集合
interface Collection {
  id: string;           // 唯一标识 UUID
  name: string;         // 集合名称
  description?: string; // 描述
  coverImage: string;   // 封面图路径
  sortOrder: number;    // 排序
  createdAt: string;    // 创建时间 ISO
  updatedAt: string;    // 更新时间 ISO
}

// 作品图片
interface WorkImage {
  id: string;           // 唯一标识 UUID
  collectionId: string; // 所属集合ID
  fileName: string;     // 文件名
  originalName: string; // 原始文件名
  themeName: string;    // 主题命名/项目名称
  filePath: string;     // 存储路径
  sortOrder: number;    // 排序
  createdAt: string;    // 上传时间 ISO
}

// 网站配置
interface SiteConfig {
  title: string;        // 网站标题
  slogan: string;      // Slogan
  adminPassword: string; // 管理密码 (哈希存储)
}

// 完整数据
interface SiteData {
  config: SiteConfig;
  collections: Collection[];
  images: WorkImage[];
}
```

### 6.3 API 接口设计

| 方法 | 路径 | 描述 | 认证 |
|------|------|------|------|
| GET | /api/collections | 获取所有集合 | 否 |
| POST | /api/collections | 创建集合 | 是 |
| PUT | /api/collections/[id] | 更新集合 | 是 |
| DELETE | /api/collections/[id] | 删除集合 | 是 |
| GET | /api/images | 获取所有图片 | 否 |
| GET | /api/images?collectionId=xxx | 按集合获取图片 | 否 |
| POST | /api/images | 上传图片 | 是 |
| PUT | /api/images/[id] | 更新图片信息 | 是 |
| DELETE | /api/images/[id] | 删除图片 | 是 |
| GET | /api/config | 获取网站配置 | 否 |
| PUT | /api/config | 更新网站配置 | 是 |
| POST | /api/auth/login | 登录验证 | 否 |
| GET | /api/export | 导出JSON数据 | 是 |

### 6.4 目录结构

```
/
├── app/
│   ├── layout.tsx              # 根布局
│   ├── page.tsx                # 首页
│   ├── works/
│   │   └── [id]/
│   │       └── page.tsx        # 集合详情页
│   ├── admin/
│   │   ├── layout.tsx          # 管理后台布局
│   │   ├── page.tsx           # 管理首页
│   │   ├── login/
│   │   │   └── page.tsx       # 登录页
│   │   ├── collections/
│   │   │   └── page.tsx       # 集合管理
│   │   ├── upload/
│   │   │   └── page.tsx       # 图片上传
│   │   └── settings/
│   │       └── page.tsx       # 网站设置
│   └── api/
│       ├── collections/
│       ├── images/
│       ├── config/
│       ├── auth/
│       └── export/
├── components/
│   ├── ui/                     # 通用UI组件
│   ├── layout/                 # 布局组件
│   ├── gallery/                # 展示端组件
│   └── admin/                  # 管理端组件
├── lib/
│   ├── data.ts                 # 数据读写
│   ├── auth.ts                 # 认证相关
│   └── utils.ts                # 工具函数
├── public/
│   └── uploads/                # 图片存储目录
├── data/
│   └── site-data.json          # 数据文件
├── tailwind.config.ts
├── next.config.js
└── package.json
```

### 6.5 部署配置

Vercel部署配置 (vercel.json)：
- 设置输出目录：`dist` 或 `.next`
- 设置环境变量：用于生产环境数据库连接
- 由于Vercel无持久存储，**重要提示**：生产环境建议使用云存储或定期手动备份data.json

---

## 7. 安全考虑

1. **管理密码**：使用bcrypt哈希存储，避免明文
2. **登录限制**：失败3次后限制5分钟
3. **文件上传**：限制文件类型（图片）、大小（10MB）
4. **权限验证**：所有写操作需要登录状态

---

## 8. 用户体验优化

1. **加载状态**：骨架屏 + 优雅的loading动画
2. **错误处理**：友好的错误提示 + 重试机制
3. **响应式**：PC端大屏优先，兼顾平板
4. **可访问性**：键盘导航、ARIA标签
