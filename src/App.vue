<template>
    <div id="app">
        <header>
            <ul>
                <li
                        v-for="(nav,i) in navList" :key="i"
                        :class="{isActive:i===currentIndex}"
                        @click="handleClick({
                        pathName:nav.pathName,
                        index:i
                        })"
                >
                    {{nav.name}}
                </li>
            </ul>
        </header>
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {
                currentIndex: 3,
                navList: [
                    {
                        name: 'OnlineStore',
                        pathName: 'online-store'
                    },
                    {
                        name: 'Product',
                        pathName: 'product'
                    },
                    {
                        name: 'Concept',
                        pathName: 'concept'
                    },
                    {
                        name: 'News',
                        pathName: 'news'
                    },

                ]
            };
        },
        watch: {
            '$route': {
                handler(newV) {
                    // console.log(newV);
                    if (newV.matched[0]) {
                        this.$router.push({
                            name: newV.name
                        });
                        this.currentIndex = sessionStorage.getItem('ACTIVE') ? +sessionStorage.getItem('ACTIVE') : 3;
                    }
                },
                deep: true,
                immediate: true
            }
        },
        methods: {
            handleClick({pathName, index}) {
                sessionStorage.setItem('ACTIVE', index);
                this.currentIndex = index;
                this.$router.push({
                    name: pathName
                });
            }
        }
    };
</script>
<style lang="scss">
    #app {
        ul {
            display: flex;
            flex-flow: row-reverse;

            .isActive {
                color: red;
            }
        }

        li {
            list-style: none;
            margin-right: 20px;
            font-weight: bold;
            font-size: 20px;

            &:first-child {
                margin-right: 50px;
            }

            &:hover {
                cursor: pointer;
            }
        }

        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
