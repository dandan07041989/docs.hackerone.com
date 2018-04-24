webpackJsonp([60606524672486],{517:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Reports are marked with a severity rating to show how severe the vulnerability is in the report submission form. On HackerOne, severity is particularly useful for structuring bounty ranges and is used when offering bounty recommendations. The severity level can be marked as: </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/docs.hackerone.com/static/severity-1-58d02cc7bc16ae6f804995247690adcf-f164e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 256px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 13.671875%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAAsSAAALEgHS3X78AAAAwklEQVQI1wG3AEj/AN3w1uX23uT14Pn56v/64v/85f/76/zv3P7z3v7y3f/04P/35fzq4vvazv3f0/3p4/nT0/rHxvzNzP3KyQCAr26PuX6fypXp6bnt2ZvfzYX77LzfvobUsHLZtnvcuYDt06D3xbPNeVzOfWDzuabigH/TXFnVZGHTW1gAzOXDzOPD0ejM9/fi+e3I9+7I/vfg++vT9eLD9uTF9eLD+u3S/eXc8sa27cCv++HY9sXE87Kw8ra0762rmRqShL3hYF8AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="severity-1"\n        title=""\n        src="/docs.hackerone.com/static/severity-1-58d02cc7bc16ae6f804995247690adcf-f164e.png"\n        srcset="/docs.hackerone.com/static/severity-1-58d02cc7bc16ae6f804995247690adcf-29e85.png 125w,\n/docs.hackerone.com/static/severity-1-58d02cc7bc16ae6f804995247690adcf-7899e.png 250w,\n/docs.hackerone.com/static/severity-1-58d02cc7bc16ae6f804995247690adcf-f164e.png 256w"\n        sizes="(max-width: 256px) 100vw, 256px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>HackerOne utilizes the Common Vulnerability Scoring System (CVSS) - an industry standard calculator used to determine the severity of a bug. The CVSS enables there to be a common languange around the severity of bugs. Hackers can either choose a severity level based on their own judgment of the vulnerability, or they can use the CVSS calculator to give more information about the vulnerability and calculate an exact CVSS score. </p>\n<p>The CVSS Calculator provides a way to capture the principal characteristics of a vulnerability and produces a numerical score reflecting its severity. The numerical score can then be translated into a qualitative representation to help properly assess and prioritize inbound vulnerabilities. </p>\n<p>There are 8 metrics defined for CVSS v3. The first 5 are about the attack method itself, while the latter three are dependent on how your program assesses impact - the direct consequence of a successful exploit. These are the different components to the CVSS Calculator:</p>\n<table>\n<thead>\n<tr>\n<th>Option</th>\n<th>Detail</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Attack Vector</td>\n<td>How exploitable the vulnerability is. The score increases the more remote an attacker can be in order to exploit the vulnerability.</td>\n</tr>\n<tr>\n<td>Attack Complexity</td>\n<td>The conditions beyond the attacker\'s control that must exist in order to exploit the vulnerability.</td>\n</tr>\n<tr>\n<td>Privilege Required</td>\n<td>The level of privileges an attacker must possess before successfully exploiting the vulnerability. The severity increases as fewer privileges are required.</td>\n</tr>\n<tr>\n<td>User Interaction</td>\n<td>Whether the vulnerability can be exploited solely at the will of the attacker or whether a separate user (or user-initiated process) must participate in some matter.</td>\n</tr>\n<tr>\n<td>Scope</td>\n<td>Whether a successful attack impacts a component other than the vulnerable component.</td>\n</tr>\n<tr>\n<td>Confidentiality</td>\n<td>The impact of the bug as it relates to confidential information being accessed.</td>\n</tr>\n<tr>\n<td>Integrity</td>\n<td>Whether the the data can be modified due to the vulnerability.</td>\n</tr>\n<tr>\n<td>Availability</td>\n<td>Whether data or functionality can be rendered inaccessible. The impact to the availability of the impacted component.</td>\n</tr>\n</tbody>\n</table>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/docs.hackerone.com/static/severity-2-28423a77da9e4721f0a164626107f08d-0cd0e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 44.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsSAAALEgHS3X78AAABDUlEQVQoz32R626EIBCFff+n28ZtVqu2EQUUL2DVCnKxo2y3m9T0+zHBkznMHAw+aJ+XhFJSINS2rbV2HMeu6+DMWAOHpmmMsdsTxhghhJQyyBBFBa4oxYT0fW+tWZZlmqZ5nqGOB9DtfgAzVL1qEANrjAbMjjXWbW7/0nf8KO/xwGrrAYjB9gdcltfra5plRYmHYVwWCbewpp2/dmAGbDQMwz75xIxxGIZJmnacM8Ygi1Lqcnm53aIcFY91gBOzEBwhBFEfitYrIbiqas6FT+GDnJgppXEcJ0kihk+vKCnf4oTSinP+3Hlirqs6iqI0e4e3uZuViqM4zwtI8Z/ZHXP8r/oVnYOnAgXqc/M3+4MHXtb9PGgAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="severity-2"\n        title=""\n        src="/docs.hackerone.com/static/severity-2-28423a77da9e4721f0a164626107f08d-e7ffa.png"\n        srcset="/docs.hackerone.com/static/severity-2-28423a77da9e4721f0a164626107f08d-49813.png 125w,\n/docs.hackerone.com/static/severity-2-28423a77da9e4721f0a164626107f08d-dc8a5.png 250w,\n/docs.hackerone.com/static/severity-2-28423a77da9e4721f0a164626107f08d-e7ffa.png 500w,\n/docs.hackerone.com/static/severity-2-28423a77da9e4721f0a164626107f08d-dda24.png 750w,\n/docs.hackerone.com/static/severity-2-28423a77da9e4721f0a164626107f08d-c5f18.png 1000w,\n/docs.hackerone.com/static/severity-2-28423a77da9e4721f0a164626107f08d-22484.png 1500w,\n/docs.hackerone.com/static/severity-2-28423a77da9e4721f0a164626107f08d-0cd0e.png 1840w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><em>Note: It\'s optional for the hacker to submit a severity rating.</em> </p>\n<p>You can read more details about CVSS <a href="https://www.first.org/cvss/user-guide">here</a>. </p>\n<p>If your program has a custom methodology for determining severity, it\'s best to describe it on your Security Page.</p>',frontmatter:{path:"/programs/severity",title:"Severity"}}},pathContext:{}}}});
//# sourceMappingURL=path---programs-severity-05167c5e6ef54187aab6.js.map