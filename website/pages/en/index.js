/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Index extends React.Component {
    getCategories() {
        let categoryComponents = [];
        let categories = [
            { href: '/learn/app-development/widgets/widget-library', backgroundImage: 'linear-gradient(to left, rgba(131, 195, 250, 0.51), #4c90f2)', icon: '/learn/img/exploreWidgets.svg', label: 'Explore 180+ Widgets.' },
            { href: '/learn/app-development/custom-widgets/prefabs-overview', backgroundImage: 'linear-gradient(to left, #addce7, #62b9a0)', icon: '/learn/img/tailorPrefabs.svg', label: 'Tailor Made Prefabs.' },
            { href: '/learn/react-native/react-native', backgroundImage: 'linear-gradient(to left, #f1cfb5, #f6a191)', icon: '/learn/img/reactNativeMobileApp.svg', label: 'React Native Mobile Apps.' },
            { href: '/learn/on-premise/welcome', backgroundImage: 'linear-gradient(to left, #f6cfed, #c68bbf)', icon: '/learn/img/enterpriseGuide.svg', label: 'Enterprise Guide' }]
        categories.forEach((category) => {
            categoryComponents.push(
                <div className="column">
                    <div className='content-wrapper'>
                        <a href={category.href}>
                            <div className='category' style={{ backgroundImage: category.backgroundImage }}>
                                <div className='column'>
                                    <span>{category.label}</span>
                                </div>
                                <div className='column'>
                                    <img height="98px" src={category.icon}></img>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            )
        })
        return categoryComponents;
    }

    getExtensions() {
        let extensionComponents = [];
        let extensions = [
            { href: '/learn/app-development/ui-design/theme-builder', icon: '/learn/img/themeBuilder.svg', label: 'Theme Builder' },
            { href: '/learn/app-development/services/api-mock-server', icon: '/learn/img/apiMocking.svg', label: 'API Mocking' },
            { href: '/learn/app-development/dev-integration/chrome-developer-tool', icon: '/learn/img/devTool.svg', label: 'Dev Tool' },
            { href: '/learn/teams/overview', icon: '/learn/img/teamPortal.svg', label: 'Teams Portal' },
            { href: '/learn/connectors/connectors-introduction', icon: '/learn/img/connectors.svg', label: 'Connectors' },
        ]
        extensions.forEach((extension) => {
            extensionComponents.push(<div className='column'>
                <div className='content-wrapper'>
                    <div className='extension'>
                        <img height="60px" src={extension.icon}></img>
                        <h4>{extension.label}</h4>
                        <a href={extension.href}>Explore <img src="/learn/img/combined-shape-black.svg" /></a>
                    </div>
                </div>
            </div >)
        })
        return extensionComponents;
    }

    render() {
        const { config: siteConfig, language = '' } = this.props;
        const { baseUrl } = siteConfig;
        let displayInfoFooter = true;

        const Main = () => {
            return (
                <main className="main-container">
                    <div className="banner">
                        <div className='row bannerContent'>
                            <div className='column'>
                                <span>Platform Documentation</span>
                                <div className='bannerSearch'>
                                    <li className="navSearchWrapper reactNavSearchWrapper" key="search">
                                        <input
                                            className='searchInput'
                                            id="search_input_react"
                                            type="text"
                                            placeholder='Type here'
                                            title='Type here'
                                        />
                                    </li>
                                    <button onClick={() => { }} className='bannerSearchButton'>Search</button>
                                </div>
                            </div>
                            <div className='column'>
                                <img className='bannerImg' src='/learn/img/bannerImage.svg' />
                            </div>
                        </div>
                        {displayInfoFooter && <div className='row bannerFooter'>
                            <div style={{ display: "inline-flex", flexDirection: 'row', flex: 8 }} className='column'>
                                <div>
                                    <span><img style={{ margin: "0 0.5em" }} src='/learn/img/speaker.svg' />Lorem ipsum is placeholder text commonly used in the graphic, prin....</span>
                                </div>
                                <a style={{ margin: "0 0.5em" }} href='#'>Learn More</a>
                            </div>
                            <div className='column'>
                                <a onClick={() => { displayInfoFooter = false; }}><img className="bannerFooterCloseImg" src='/learn/img/closeIcon.svg' /></a>
                            </div>
                        </div>}
                    </div>
                    <div className='row categories'>
                        {this.getCategories()}
                    </div>
                    <div className='row extensionInfo'>
                        <div className='column'>
                            <span>Studio Extensions</span>
                        </div>
                    </div>
                    <div className='row extensions'>
                        {this.getExtensions()}
                    </div>
                    <div className='indexFooter'>
                        <div className='column'>
                            <div className='row'>
                                <div className='column'>
                                    <div className='content-wrapper'>
                                        <div className='footerContent'>
                                            <img className='footerImage' src='/learn/img/WM_blue_logo.png'></img>
                                            <p>Wavemaker Docs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className='content-wrapper'>
                                        <div className='footerContent'>
                                            <a href='/learn/'>Learn</a>
                                            <a href='/learn/tutorials'>Tutorial</a>
                                            <a href='/learn/tutorials/leave-management-app'>Exercises</a>
                                            <a href=''>Get Training</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className='content-wrapper'>
                                        <div className='footerContent'>
                                            <a href='/learn/app-development/wavemaker-overview/platform-overview'>Platform</a>
                                            <a href='/learn/connectors/connectors-architecture#docsNav'>Architecture</a>
                                            <a href='/learn/app-development/wavemaker-overview/faqs-11-beta'>FAQs</a>
                                            <a href='/learn/app-development/wavemaker-overview/product-walkthrough'>Studio Walkthrough</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className='content-wrapper'>
                                        <div className='footerContent'>
                                            <a href='/learn/blog/2020/04/21/wavemaker-openapi-import'>API References</a>
                                            <a href='/learn/app-development/wavemaker-app-development-faqs/widgets-in-wavemaker'>Widgets API</a>
                                            <a href='/learn/react-native/styles'>React Native Styles</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className='content-wrapper'>
                                        <div className='footerContent'>
                                            <a href='/learn/documentation-reference#quick-start-guide'>Quick Topics</a>
                                            <a href='/learn/how-tos/localization-wavemaker-apps'>Localization</a>
                                            <a href='/learn/how-tos/building-pwa-app#what-is-pwa-progressive-web-application'>PWA</a>
                                            <a href='/learn/blog/2020/02/25/wavemaker-micro-front-end-support'>Micro Frontend</a>
                                            <a href='/learn/app-development/sspa/micro-frontend'>SSPA</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className='content-wrapper'>
                                        <div className='footerContent'>
                                            <a href=''>Community</a>
                                            <a href=''>Forum</a>
                                            <a href='https://github.com/wavemaker'>Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='column'>
                                    <p></p>
                                </div>
                                <div className="column navigation">
                                    <ul id="nav">
                                        <li><a href="https://www.wavemaker.com/get-started" target="_blank" >PRICING</a> </li>
                                        <li><a href="https://www.wavemaker.com/partners" target="_blank" >PARTNERS</a> </li>
                                        <li><a href="https://www.wavemaker.com/customer-stories" target="_blank" >CUSTOMERS</a> </li>
                                        <li><a href="https://www.wavemaker.com/about" target="_blank" >ABOUT US</a> </li>
                                        <li><a href="https://www.wavemaker.com/contact" target="_blank" >CONTACT US</a> </li>
                                    </ul>
                                </div>
                                <div className="column social-media-list">
                                    <ul>
                                        <li><a href="https://www.facebook.com/wavemakersoftware" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a> </li>
                                        <li><a href="https://www.youtube.com/c/WaveMaker" target="_blank" title="YouTube"> <i className="fa fa-youtube-play"></i></a> </li>
                                        <li><a href="https://twitter.com/WaveMaker" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a> </li>
                                        <li><a href="http://www.linkedin.com/company/wavemaker" target="_blank" title="LinkedIn"><i className="fa fa-linkedin" style={{ 'fontSize': '22px' }}></i></a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row'>
                                <div id="copyright">
                                    <div className="container">
                                        <div className="copyright-text"> <a href="//www.wavemaker.com/legal/terms-of-use/">Terms of Use </a>| {this.props.config.copyright} </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            );
        };

        return (
            <div>
                <Main />
            </div>
        );
    }
}

module.exports = Index;
