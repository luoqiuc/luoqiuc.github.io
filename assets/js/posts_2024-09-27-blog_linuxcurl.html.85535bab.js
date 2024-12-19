"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[3730],{2789:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,e]of s)a[i]=e;return a}},8908:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>n,data:()=>h});var e=a(7829);const t=[(0,e.Fv)('<h1 id="curl使用说明" tabindex="-1"><a class="header-anchor" href="#curl使用说明"><span>curl使用说明</span></a></h1><p><a href="https://catonmat.net/cookbooks/curl" target="_blank" rel="noopener noreferrer">参考地址</a></p><blockquote><p>遇到使用场景后续在补充</p></blockquote><h2 id="配置请求的cookie" tabindex="-1"><a class="header-anchor" href="#配置请求的cookie"><span>配置请求的cookie</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://localhost:9600/getuser</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --cookie</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;USER_TOKEN=xxxxxxxxxxxxxxxxxx&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置请求头的参数" tabindex="-1"><a class="header-anchor" href="#配置请求头的参数"><span>配置请求头的参数</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://localhost:9600/getuser</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -H</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;X-Request-Id:12&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="发送post请求" tabindex="-1"><a class="header-anchor" href="#发送post请求"><span>发送post请求</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> POST</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://localhost:9600/putuser</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -H</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;X-Request-Id:12&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="发送带请求体的post请求" tabindex="-1"><a class="header-anchor" href="#发送带请求体的post请求"><span>发送带请求体的POST请求</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 发送JSON数据</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -H</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;Content-Type: application/json&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;{&quot;name&quot;:&quot;张三&quot;,&quot;age&quot;:18}&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://localhost:9600/user</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 发送表单数据</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;name=张三&amp;age=18&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://localhost:9600/user</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="下载文件" tabindex="-1"><a class="header-anchor" href="#下载文件"><span>下载文件</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 下载并保存为原文件名</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://example.com/file.zip</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 下载并指定保存的文件名</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> myfile.zip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://example.com/file.zip</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="显示详细的请求��息" tabindex="-1"><a class="header-anchor" href="#显示详细的请求��息"><span>显示详细的请求��息</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># -v 参数可以显示请求的详细信息,包括请求头、响应头等</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://localhost:9600/getuser</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># -i 参数可以显示响应头信息</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://localhost:9600/getuser</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跟随重定向" tabindex="-1"><a class="header-anchor" href="#跟随重定向"><span>跟随重定向</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># -L 参数可以跟随30x重定向</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://localhost:9600/redirect</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置超时时间" tabindex="-1"><a class="header-anchor" href="#设置超时时间"><span>设置超时时间</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 设置连接超时时间为5秒</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --connect-timeout</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://localhost:9600/getuser</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件"><span>上传文件</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 上传单个文件</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;file=@/path/to/local/file.txt&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://localhost:9600/upload</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 上传多个文件</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;file1=@/path/to/file1.txt&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -F</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;file2=@/path/to/file2.txt&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://localhost:9600/upload</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',21)],l={},n=(0,a(2789).A)(l,[["render",function(i,s){return(0,e.uX)(),(0,e.CE)("div",null,t)}]]),h=JSON.parse('{"path":"/posts/2024-09-27-blog_linuxcurl.html","title":"curl使用说明","lang":"zh-CN","frontmatter":{"title":"curl使用说明","date":"2024-09-27T17:20:49.000Z","category":["curl"],"tag":["curl"],"sticky":false,"star":false,"order":-1,"description":"curl使用说明 参考地址 遇到使用场景后续在补充 配置请求的cookie 配置请求头的参数 发送post请求 发送带请求体的POST请求 下载文件 显示详细的请求��息 跟随重定向 设置超时时间 上传文件","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2024-09-27-blog_linuxcurl.html"}],["meta",{"property":"og:site_name","content":"LearnData 开源笔记"}],["meta",{"property":"og:title","content":"curl使用说明"}],["meta",{"property":"og:description","content":"curl使用说明 参考地址 遇到使用场景后续在补充 配置请求的cookie 配置请求头的参数 发送post请求 发送带请求体的POST请求 下载文件 显示详细的请求��息 跟随重定向 设置超时时间 上传文件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-19T04:24:29.000Z"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:tag","content":"curl"}],["meta",{"property":"article:published_time","content":"2024-09-27T17:20:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-19T04:24:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"curl使用说明\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-27T17:20:49.000Z\\",\\"dateModified\\":\\"2024-12-19T04:24:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LearnData\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"配置请求的cookie","slug":"配置请求的cookie","link":"#配置请求的cookie","children":[]},{"level":2,"title":"配置请求头的参数","slug":"配置请求头的参数","link":"#配置请求头的参数","children":[]},{"level":2,"title":"发送post请求","slug":"发送post请求","link":"#发送post请求","children":[]},{"level":2,"title":"发送带请求体的POST请求","slug":"发送带请求体的post请求","link":"#发送带请求体的post请求","children":[]},{"level":2,"title":"下载文件","slug":"下载文件","link":"#下载文件","children":[]},{"level":2,"title":"显示详细的请求��息","slug":"显示详细的请求��息","link":"#显示详细的请求��息","children":[]},{"level":2,"title":"跟随重定向","slug":"跟随重定向","link":"#跟随重定向","children":[]},{"level":2,"title":"设置超时时间","slug":"设置超时时间","link":"#设置超时时间","children":[]},{"level":2,"title":"上传文件","slug":"上传文件","link":"#上传文件","children":[]}],"git":{"createdTime":1727429395000,"updatedTime":1734582269000,"contributors":[{"name":"lengxc","email":"lengxc@qiysd.com","commits":1}]},"readingTime":{"minutes":1.46,"words":437},"filePathRelative":"_posts/2024-09-27-blog_linuxcurl.md","localizedDate":"2024年9月27日","excerpt":"\\n<p><a href=\\"https://catonmat.net/cookbooks/curl\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">参考地址</a></p>\\n<blockquote>\\n<p>遇到使用场景后续在补充</p>\\n</blockquote>\\n<h2>配置请求的cookie</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">curl</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> http://localhost:9600/getuser</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --cookie</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"USER_TOKEN=xxxxxxxxxxxxxxxxxx\\"</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);