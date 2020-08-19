<template>
    <Layout>
        <h1>{{$page.googleSheet.Topic}}</h1>
            <div>
                <h2>{{$page.googleSheet.Description}}</h2></div>

                <div><h3>{{$page.googleSheet.TopicA}}</h3>
                    
                </div>
        </Layout>
</template>
<page-query>
query Sheet($path: String!){
    googleSheet(path: $path){
        Topic
        Description
        TopicA 
        LinkA
        TopicB
        LinkB
        

    }
}
</page-query>
<script>
export default {
    
}
</script>