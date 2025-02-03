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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><li class="part-title">Linux Networking</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="content/Linux-Networking/wg.html"><strong aria-hidden="true">1.</strong> wg</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/netcat.html"><strong aria-hidden="true">2.</strong> nc</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/netstat.html"><strong aria-hidden="true">3.</strong> netstat</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/nmap.html"><strong aria-hidden="true">4.</strong> nmap</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/rsync.html"><strong aria-hidden="true">5.</strong> rsync</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/SSH.html"><strong aria-hidden="true">6.</strong> SSH</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="content/Linux-Networking/ssh/ssh-keygen.html"><strong aria-hidden="true">6.1.</strong> ssh-keygen</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/ssh/ssh-copy-id.html"><strong aria-hidden="true">6.2.</strong> ssh-copy-id</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/ssh/ssh-config.html"><strong aria-hidden="true">6.3.</strong> ssh-config</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/ssh.html"><strong aria-hidden="true">6.4.</strong> ssh</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/ssh/scp.html"><strong aria-hidden="true">6.5.</strong> scp</a></li><li class="chapter-item expanded "><a href="content/Linux-Networking/ssh/reverse-ssh.html"><strong aria-hidden="true">6.6.</strong> Reverse SSH</a></li></ol></li><li class="chapter-item expanded "><a href="content/Linux-Networking/ip.html"><strong aria-hidden="true">7.</strong> ip</a></li><li class="chapter-item expanded affix "><li class="part-title">File Searching</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="content/File-Searching/awk.html"><strong aria-hidden="true">8.</strong> awk</a></li><li class="chapter-item expanded "><a href="content/File-Searching/grep.html"><strong aria-hidden="true">9.</strong> grep</a></li><li class="chapter-item expanded "><a href="content/File-Searching/sed.html"><strong aria-hidden="true">10.</strong> sed</a></li><li class="chapter-item expanded "><a href="content/File-Searching/find.html"><strong aria-hidden="true">11.</strong> find</a></li><li class="chapter-item expanded "><a href="content/File-Searching/jq.html"><strong aria-hidden="true">12.</strong> jq</a></li><li class="chapter-item expanded affix "><li class="part-title">System Administration</li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="content/System-Administrator/packages.html"><strong aria-hidden="true">13.</strong> Packages</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="content/System-Administrator/Packages/nala.html"><strong aria-hidden="true">13.1.</strong> nala</a></li><li class="chapter-item expanded "><a href="content/System-Administrator/Packages/apt.html"><strong aria-hidden="true">13.2.</strong> apt</a></li><li class="chapter-item expanded "><a href="content/System-Administrator/Packages/dpkg.html"><strong aria-hidden="true">13.3.</strong> dpkg</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
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
