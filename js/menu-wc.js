'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">B.M-auth-docs</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-bc25d951f4e618f177ca82212e6c7d60794879c3bd96585533099762073ccd47fbde88c8ac74c9a41278905e27f708ad8c250321e62f6460c9dcab4f007a587c"' : 'data-target="#xs-controllers-links-module-AppModule-bc25d951f4e618f177ca82212e6c7d60794879c3bd96585533099762073ccd47fbde88c8ac74c9a41278905e27f708ad8c250321e62f6460c9dcab4f007a587c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-bc25d951f4e618f177ca82212e6c7d60794879c3bd96585533099762073ccd47fbde88c8ac74c9a41278905e27f708ad8c250321e62f6460c9dcab4f007a587c"' :
                                            'id="xs-controllers-links-module-AppModule-bc25d951f4e618f177ca82212e6c7d60794879c3bd96585533099762073ccd47fbde88c8ac74c9a41278905e27f708ad8c250321e62f6460c9dcab4f007a587c"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthJwtModule.html" data-type="entity-link" >AuthJwtModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthJwtModule-f0a53c5acc9d3760ae20f1663e56b5b4613f53ce64c0f6f840873650e48eef3a515ea618dc628934dcc6b623fcd9224681a65cea6246c78433ee0baf49b13320"' : 'data-target="#xs-injectables-links-module-AuthJwtModule-f0a53c5acc9d3760ae20f1663e56b5b4613f53ce64c0f6f840873650e48eef3a515ea618dc628934dcc6b623fcd9224681a65cea6246c78433ee0baf49b13320"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthJwtModule-f0a53c5acc9d3760ae20f1663e56b5b4613f53ce64c0f6f840873650e48eef3a515ea618dc628934dcc6b623fcd9224681a65cea6246c78433ee0baf49b13320"' :
                                        'id="xs-injectables-links-module-AuthJwtModule-f0a53c5acc9d3760ae20f1663e56b5b4613f53ce64c0f6f840873650e48eef3a515ea618dc628934dcc6b623fcd9224681a65cea6246c78433ee0baf49b13320"' }>
                                        <li class="link">
                                            <a href="injectables/AuthAccessTokenService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthAccessTokenService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthJwtAccessTokenStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthJwtAccessTokenStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthJwtRefreshTokenStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthJwtRefreshTokenStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthRefreshTokenService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthRefreshTokenService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthJwtRepositoryModule.html" data-type="entity-link" >AuthJwtRepositoryModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthJwtRepositoryModule-32da4bd64a8f24d6c82e5b527c550946c12180c4a448ca1d5ef1ebc7815fe403a4b248bc974ff3a19dcb8a741585bd2275f15eeea554e278f7f64c859d6ac4cd"' : 'data-target="#xs-injectables-links-module-AuthJwtRepositoryModule-32da4bd64a8f24d6c82e5b527c550946c12180c4a448ca1d5ef1ebc7815fe403a4b248bc974ff3a19dcb8a741585bd2275f15eeea554e278f7f64c859d6ac4cd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthJwtRepositoryModule-32da4bd64a8f24d6c82e5b527c550946c12180c4a448ca1d5ef1ebc7815fe403a4b248bc974ff3a19dcb8a741585bd2275f15eeea554e278f7f64c859d6ac4cd"' :
                                        'id="xs-injectables-links-module-AuthJwtRepositoryModule-32da4bd64a8f24d6c82e5b527c550946c12180c4a448ca1d5ef1ebc7815fe403a4b248bc974ff3a19dcb8a741585bd2275f15eeea554e278f7f64c859d6ac4cd"' }>
                                        <li class="link">
                                            <a href="injectables/AuthAccessTokenRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthAccessTokenRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthRefreshTokenRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthRefreshTokenRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AwsModule.html" data-type="entity-link" >AwsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AwsModule-8f823dbb48e4e1873b315136dc86b8783b98e9a29525c389ab24b0363c606faf82e227da8e4fdaab0ded791144c7ea0a4f663c873f542ec79f57e16039b427cb"' : 'data-target="#xs-injectables-links-module-AwsModule-8f823dbb48e4e1873b315136dc86b8783b98e9a29525c389ab24b0363c606faf82e227da8e4fdaab0ded791144c7ea0a4f663c873f542ec79f57e16039b427cb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AwsModule-8f823dbb48e4e1873b315136dc86b8783b98e9a29525c389ab24b0363c606faf82e227da8e4fdaab0ded791144c7ea0a4f663c873f542ec79f57e16039b427cb"' :
                                        'id="xs-injectables-links-module-AwsModule-8f823dbb48e4e1873b315136dc86b8783b98e9a29525c389ab24b0363c606faf82e227da8e4fdaab0ded791144c7ea0a4f663c873f542ec79f57e16039b427cb"' }>
                                        <li class="link">
                                            <a href="injectables/AwsS3Service.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AwsS3Service</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AwsRepositoryModule.html" data-type="entity-link" >AwsRepositoryModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DatabaseModule-7f9c9adf60bf9d3db10c690dbf65cd0c45c07be68329b13def31bfc894d0be31d2d19ce79041c5bbad9b4b320020b7c9815f4b024985202194059ce571580ce6"' : 'data-target="#xs-injectables-links-module-DatabaseModule-7f9c9adf60bf9d3db10c690dbf65cd0c45c07be68329b13def31bfc894d0be31d2d19ce79041c5bbad9b4b320020b7c9815f4b024985202194059ce571580ce6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-7f9c9adf60bf9d3db10c690dbf65cd0c45c07be68329b13def31bfc894d0be31d2d19ce79041c5bbad9b4b320020b7c9815f4b024985202194059ce571580ce6"' :
                                        'id="xs-injectables-links-module-DatabaseModule-7f9c9adf60bf9d3db10c690dbf65cd0c45c07be68329b13def31bfc894d0be31d2d19ce79041c5bbad9b4b320020b7c9815f4b024985202194059ce571580ce6"' }>
                                        <li class="link">
                                            <a href="injectables/DatabaseOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabaseOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HealthModule-5efa16b86101ecab12c497768e05a13ee88f353ea74976bcd34943f82d7d298bfcfafd4020cff1ea3a3ad46dfa0677baa1c67e7e0b8758bdb3c4116247f667b9"' : 'data-target="#xs-injectables-links-module-HealthModule-5efa16b86101ecab12c497768e05a13ee88f353ea74976bcd34943f82d7d298bfcfafd4020cff1ea3a3ad46dfa0677baa1c67e7e0b8758bdb3c4116247f667b9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HealthModule-5efa16b86101ecab12c497768e05a13ee88f353ea74976bcd34943f82d7d298bfcfafd4020cff1ea3a3ad46dfa0677baa1c67e7e0b8758bdb3c4116247f667b9"' :
                                        'id="xs-injectables-links-module-HealthModule-5efa16b86101ecab12c497768e05a13ee88f353ea74976bcd34943f82d7d298bfcfafd4020cff1ea3a3ad46dfa0677baa1c67e7e0b8758bdb3c4116247f667b9"' }>
                                        <li class="link">
                                            <a href="injectables/HealthAwsS3Indicator.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthAwsS3Indicator</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelperModule.html" data-type="entity-link" >HelperModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HelperModule-8a996732a906534fa96d50384223da9f612024d35ba3593592eb9fae10711dfb0aefbfd2cf1ae3a4144b87c1fcd40685d52a5fe9a6e23a8a3190f421011a7cd6"' : 'data-target="#xs-injectables-links-module-HelperModule-8a996732a906534fa96d50384223da9f612024d35ba3593592eb9fae10711dfb0aefbfd2cf1ae3a4144b87c1fcd40685d52a5fe9a6e23a8a3190f421011a7cd6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HelperModule-8a996732a906534fa96d50384223da9f612024d35ba3593592eb9fae10711dfb0aefbfd2cf1ae3a4144b87c1fcd40685d52a5fe9a6e23a8a3190f421011a7cd6"' :
                                        'id="xs-injectables-links-module-HelperModule-8a996732a906534fa96d50384223da9f612024d35ba3593592eb9fae10711dfb0aefbfd2cf1ae3a4144b87c1fcd40685d52a5fe9a6e23a8a3190f421011a7cd6"' }>
                                        <li class="link">
                                            <a href="injectables/HelperEncryptionService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelperEncryptionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HelperHashService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelperHashService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HelperStringService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelperStringService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RequestModule.html" data-type="entity-link" >RequestModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RoleModule.html" data-type="entity-link" >RoleModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RoleRepositoryModule.html" data-type="entity-link" >RoleRepositoryModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RouterModule.html" data-type="entity-link" >RouterModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RoutesModule.html" data-type="entity-link" >RoutesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RoutesModule-292d3f2af68e5624eee382ff796469d48092b89007b78e01de52eebfe34843a97c88e433bade07e3f3bf68dac2d8a6a593dedeb606143f31c6e6afe085034b63"' : 'data-target="#xs-controllers-links-module-RoutesModule-292d3f2af68e5624eee382ff796469d48092b89007b78e01de52eebfe34843a97c88e433bade07e3f3bf68dac2d8a6a593dedeb606143f31c6e6afe085034b63"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RoutesModule-292d3f2af68e5624eee382ff796469d48092b89007b78e01de52eebfe34843a97c88e433bade07e3f3bf68dac2d8a6a593dedeb606143f31c6e6afe085034b63"' :
                                            'id="xs-controllers-links-module-RoutesModule-292d3f2af68e5624eee382ff796469d48092b89007b78e01de52eebfe34843a97c88e433bade07e3f3bf68dac2d8a6a593dedeb606143f31c6e6afe085034b63"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoutesPublicModule.html" data-type="entity-link" >RoutesPublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RoutesPublicModule-9df15762dc6e5109acf520b13fbe48df7a59f96ea157663f56c01d0e9e761fa9e67f1598829e01ece4f8aff8b728aad7844b7324b8fefe6796263a72362072e1"' : 'data-target="#xs-controllers-links-module-RoutesPublicModule-9df15762dc6e5109acf520b13fbe48df7a59f96ea157663f56c01d0e9e761fa9e67f1598829e01ece4f8aff8b728aad7844b7324b8fefe6796263a72362072e1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RoutesPublicModule-9df15762dc6e5109acf520b13fbe48df7a59f96ea157663f56c01d0e9e761fa9e67f1598829e01ece4f8aff8b728aad7844b7324b8fefe6796263a72362072e1"' :
                                            'id="xs-controllers-links-module-RoutesPublicModule-9df15762dc6e5109acf520b13fbe48df7a59f96ea157663f56c01d0e9e761fa9e67f1598829e01ece4f8aff8b728aad7844b7324b8fefe6796263a72362072e1"' }>
                                            <li class="link">
                                                <a href="controllers/UserPublicController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserPublicController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-70144951ea75a29fb01508504f8f5a8c4db7489ef1f2268a8bf28364b15d35c3850fe8b2008b3c8e536690a72b3cf04d15dcf523ed18c9745cf5599c4b5daac5"' : 'data-target="#xs-injectables-links-module-UserModule-70144951ea75a29fb01508504f8f5a8c4db7489ef1f2268a8bf28364b15d35c3850fe8b2008b3c8e536690a72b3cf04d15dcf523ed18c9745cf5599c4b5daac5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-70144951ea75a29fb01508504f8f5a8c4db7489ef1f2268a8bf28364b15d35c3850fe8b2008b3c8e536690a72b3cf04d15dcf523ed18c9745cf5599c4b5daac5"' :
                                        'id="xs-injectables-links-module-UserModule-70144951ea75a29fb01508504f8f5a8c4db7489ef1f2268a8bf28364b15d35c3850fe8b2008b3c8e536690a72b3cf04d15dcf523ed18c9745cf5599c4b5daac5"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRepositoryModule.html" data-type="entity-link" >UserRepositoryModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserRepositoryModule-a4b0112a36bb2f62f3b86fa7daf93a94424a8196c4a8618078981d230ce13c2aa01b01ea1ba71b834b8bb378ea195fd7798f899c2114235dd453a8dc042a2c7a"' : 'data-target="#xs-injectables-links-module-UserRepositoryModule-a4b0112a36bb2f62f3b86fa7daf93a94424a8196c4a8618078981d230ce13c2aa01b01ea1ba71b834b8bb378ea195fd7798f899c2114235dd453a8dc042a2c7a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserRepositoryModule-a4b0112a36bb2f62f3b86fa7daf93a94424a8196c4a8618078981d230ce13c2aa01b01ea1ba71b834b8bb378ea195fd7798f899c2114235dd453a8dc042a2c7a"' :
                                        'id="xs-injectables-links-module-UserRepositoryModule-a4b0112a36bb2f62f3b86fa7daf93a94424a8196c4a8618078981d230ce13c2aa01b01ea1ba71b834b8bb378ea195fd7798f899c2114235dd453a8dc042a2c7a"' }>
                                        <li class="link">
                                            <a href="injectables/UserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserPublicController.html" data-type="entity-link" >UserPublicController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthAccessTokenEntity.html" data-type="entity-link" >AuthAccessTokenEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthEntityAbstract.html" data-type="entity-link" >AuthEntityAbstract</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthRefreshTokenEntity.html" data-type="entity-link" >AuthRefreshTokenEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthUpdateRefreshTokenDto.html" data-type="entity-link" >AuthUpdateRefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AwsPhotoEntity.html" data-type="entity-link" >AwsPhotoEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AwsS3MultipartPartsSerialization.html" data-type="entity-link" >AwsS3MultipartPartsSerialization</a>
                            </li>
                            <li class="link">
                                <a href="classes/AwsS3MultipartSerialization.html" data-type="entity-link" >AwsS3MultipartSerialization</a>
                            </li>
                            <li class="link">
                                <a href="classes/AwsS3Serialization.html" data-type="entity-link" >AwsS3Serialization</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatabaseEntityAbstract.html" data-type="entity-link" >DatabaseEntityAbstract</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatabaseMysqlRepositoryAbstract.html" data-type="entity-link" >DatabaseMysqlRepositoryAbstract</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleEntity.html" data-type="entity-link" >RoleEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/SettingModule.html" data-type="entity-link" >SettingModule</a>
                            </li>
                            <li class="link">
                                <a href="classes/SettingService.html" data-type="entity-link" >SettingService</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserCreateDto.html" data-type="entity-link" >UserCreateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link" >UserEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPasswordAttemptDto.html" data-type="entity-link" >UserPasswordAttemptDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRegisterDto.html" data-type="entity-link" >UserRegisterDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthAccessTokenRepository.html" data-type="entity-link" >AuthAccessTokenRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthAccessTokenService.html" data-type="entity-link" >AuthAccessTokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthJwtAccessTokenGuard.html" data-type="entity-link" >AuthJwtAccessTokenGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthJwtAccessTokenStrategy.html" data-type="entity-link" >AuthJwtAccessTokenStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthJwtRefreshTokenGuard.html" data-type="entity-link" >AuthJwtRefreshTokenGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthJwtRefreshTokenStrategy.html" data-type="entity-link" >AuthJwtRefreshTokenStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthRefreshTokenRepository.html" data-type="entity-link" >AuthRefreshTokenRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthRefreshTokenService.html" data-type="entity-link" >AuthRefreshTokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AwsS3Service.html" data-type="entity-link" >AwsS3Service</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseOptionsService.html" data-type="entity-link" >DatabaseOptionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HealthAwsS3Indicator.html" data-type="entity-link" >HealthAwsS3Indicator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HelperEncryptionService.html" data-type="entity-link" >HelperEncryptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HelperHashService.html" data-type="entity-link" >HelperHashService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HelperStringService.html" data-type="entity-link" >HelperStringService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRepository.html" data-type="entity-link" >UserRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAuthAccessTokenService.html" data-type="entity-link" >IAuthAccessTokenService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuthPayloadOptions.html" data-type="entity-link" >IAuthPayloadOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuthRefreshTokenService.html" data-type="entity-link" >IAuthRefreshTokenService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuthService.html" data-type="entity-link" >IAuthService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAwsS3PutItemOptions.html" data-type="entity-link" >IAwsS3PutItemOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAwsS3Service.html" data-type="entity-link" >IAwsS3Service</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDatabaseCreateOptions.html" data-type="entity-link" >IDatabaseCreateOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDatabaseExistOptions.html" data-type="entity-link" >IDatabaseExistOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDatabaseFindAllOptions.html" data-type="entity-link" >IDatabaseFindAllOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDatabaseFindOneOptions.html" data-type="entity-link" >IDatabaseFindOneOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDatabaseOptionsService.html" data-type="entity-link" >IDatabaseOptionsService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDatabaseRepository.html" data-type="entity-link" >IDatabaseRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHelperEncryptionService.html" data-type="entity-link" >IHelperEncryptionService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHelperHashService.html" data-type="entity-link" >IHelperHashService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHelperJwtOptions.html" data-type="entity-link" >IHelperJwtOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHelperJwtVerifyOptions.html" data-type="entity-link" >IHelperJwtVerifyOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHelperRandomStringOptions.html" data-type="entity-link" >IHelperRandomStringOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHelperStringService.html" data-type="entity-link" >IHelperStringService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPaginationOptions.html" data-type="entity-link" >IPaginationOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISettingService.html" data-type="entity-link" >ISettingService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserService.html" data-type="entity-link" >IUserService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="unit-test.html"><span class="icon ion-ios-podium"></span>Unit test coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});