// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><li class="part-title">Linux Networking</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="content/Linux-Networking/IP.html"><strong aria-hidden="true">1.</strong> IP</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="content/Linux-Networking/IP/sub-commands.html"><strong aria-hidden="true">1.1.</strong> Sub Commands</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="content/Linux-Networking/IP/sub-commands/ip-link.html"><strong aria-hidden="true">1.1.1.</strong> ip link</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/IP/sub-commands/ip-neighbour.html"><strong aria-hidden="true">1.1.2.</strong> ip neighbour</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/IP/sub-commands/ip-address.html"><strong aria-hidden="true">1.1.3.</strong> ip address</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/IP/sub-commands/ip-route.html"><strong aria-hidden="true">1.1.4.</strong> ip route</a></li></ol></li><li class="chapter-item expanded "><a href="content/Linux-Networking/IP/use-of-ip.html"><strong aria-hidden="true">1.2.</strong> Use of ip</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="content/Linux-Networking/IP/use-of-ip/RoaS.html"><strong aria-hidden="true">1.2.1.</strong> RoaS</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/IP/use-of-ip/GRE.html"><strong aria-hidden="true">1.2.2.</strong> GRE</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="content/Linux-Networking/wg.html"><strong aria-hidden="true">2.</strong> WireGuard</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/SSH.html"><strong aria-hidden="true">3.</strong> SSH</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="content/Linux-Networking/SSH/ssh-keygen.html"><strong aria-hidden="true">3.1.</strong> ssh-keygen</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/SSH/ssh-copy-id.html"><strong aria-hidden="true">3.2.</strong> ssh-copy-id</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/SSH/ssh-config.html"><strong aria-hidden="true">3.3.</strong> ~./ssh/config file</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/SSH/ssh.html"><strong aria-hidden="true">3.4.</strong> ssh</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/SSH/scp.html"><strong aria-hidden="true">3.5.</strong> scp</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/SSH/ssh-github.html"><strong aria-hidden="true">3.6.</strong> SSH for GitHub</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/SSH/port-forwarding.html"><strong aria-hidden="true">3.7.</strong> Port Forwarding</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="content/Linux-Networking/SSH/PortFowarding/local-port-fowarding.html"><strong aria-hidden="true">3.7.1.</strong> Local Port Fowarding</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/SSH/PortFowarding/remote-port-forwarding.html"><strong aria-hidden="true">3.7.2.</strong> Remote Port Forwarding</a></li></ol></li><li class="chapter-item expanded "><a href="content/Linux-Networking/SSH/SSH-Server.html"><strong aria-hidden="true">3.8.</strong> SSH Server</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="content/Linux-Networking/SSH/SSH-Server/becoming-an-SSH-server.html"><strong aria-hidden="true">3.8.1.</strong> Hosting an SSH Server</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/SSH/SSH-Server/change-SSH-port.html"><strong aria-hidden="true">3.8.2.</strong> Change port SSH runs on</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="content/Linux-Networking/rsync.html"><strong aria-hidden="true">4.</strong> rsync</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/netcat.html"><strong aria-hidden="true">5.</strong> nc</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/netstat.html"><strong aria-hidden="true">6.</strong> netstat</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/nmap.html"><strong aria-hidden="true">7.</strong> nmap</a></li><li class="chapter-item expanded affix "><li class="part-title">File Searching</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="content/File-Searching/awk.html"><strong aria-hidden="true">8.</strong> awk</a></li><li class="chapter-item expanded "><a href="content/File-Searching/grep.html"><strong aria-hidden="true">9.</strong> grep</a></li><li class="chapter-item expanded "><a href="content/File-Searching/sed.html"><strong aria-hidden="true">10.</strong> sed</a></li><li class="chapter-item expanded "><a href="content/File-Searching/find.html"><strong aria-hidden="true">11.</strong> find</a></li><li class="chapter-item expanded "><a href="content/File-Searching/jq.html"><strong aria-hidden="true">12.</strong> jq</a></li><li class="chapter-item expanded affix "><li class="part-title">System Administration</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="content/System-Administrator/packages.html"><strong aria-hidden="true">13.</strong> Packages</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="content/System-Administrator/Packages/nala.html"><strong aria-hidden="true">13.1.</strong> nala</a></li><li class="chapter-item expanded "><a href="content/System-Administrator/Packages/apt.html"><strong aria-hidden="true">13.2.</strong> apt</a></li><li class="chapter-item expanded "><a href="content/System-Administrator/Packages/dpkg.html"><strong aria-hidden="true">13.3.</strong> dpkg</a></li></ol></li><li class="chapter-item expanded "><a href="content/System-Administrator/Users/QAs/users.html"><strong aria-hidden="true">14.</strong> Users</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="content/System-Administrator/Users/tools.html"><strong aria-hidden="true">14.1.</strong> Tools</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="content/System-Administrator/Users/Tools/useradd.html"><strong aria-hidden="true">14.1.1.</strong> useradd</a></li><li class="chapter-item expanded "><a href="content/System-Administrator/Users/Tools/adduser.html"><strong aria-hidden="true">14.1.2.</strong> adduser</a></li><li class="chapter-item expanded "><a href="content/System-Administrator/Users/Tools/userdel.html"><strong aria-hidden="true">14.1.3.</strong> userdel</a></li><li class="chapter-item expanded "><a href="content/System-Administrator/Users/Tools/chsh.html"><strong aria-hidden="true">14.1.4.</strong> chsh</a></li><li class="chapter-item expanded "><a href="content/System-Administrator/Users/Tools/passwd.html"><strong aria-hidden="true">14.1.5.</strong> passwd</a></li></ol></li><li class="chapter-item expanded "><a href="content/System-Administrator/Users/QAs.html"><strong aria-hidden="true">14.2.</strong> Q&amp;As</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="content/System-Administrator/Users/QAs/change-user-name.html"><strong aria-hidden="true">14.2.1.</strong> Change user&#39;s name</a></li><li class="chapter-item expanded "><a href="content/System-Administrator/Users/QAs/change-user-password.html"><strong aria-hidden="true">14.2.2.</strong> Change user&#39;s password</a></li><li class="chapter-item expanded "><a href="content/System-Administrator/Users/QAs/change-user-shell.html"><strong aria-hidden="true">14.2.3.</strong> Change user&#39;s default shell</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="part-title">🐳 Docker</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="content/Docker/installation.html"><strong aria-hidden="true">15.</strong> Installation</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="content/Docker/Installtation/on-Ubuntu.html"><strong aria-hidden="true">15.1.</strong> On Ubuntu</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
