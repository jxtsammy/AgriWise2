import React from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

const CommunityScreen = ({navigation}) => {
  const filterTags = ['Cucumber', 'Apple', 'Black Gram'];

  const posts = [
    {
      id: 1,
      user: 'Aski Babu',
      rating: '2.4',
      question: 'What could be the reason',
      description: 'Holes are seen in many plants',
      image: require('../../assets/crop1.jpeg'),
      timeAgo: '2 answers',
      likes: 12
    },
    {
      id: 2,
      user: 'Aski Babu',
      question: 'What could be the reason',
      image: require('../../assets/cabcrop.jpg'),
      timeAgo: '1 answer',
      likes: 8
    }
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Community</Text>
        </View>
        <TouchableOpacity>
          <Feather name="bell" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Feather name="search" size={20} color="#666" />
            <TextInput
              placeholder="What's your issue?"
              style={styles.searchInput}
              placeholderTextColor="#666"
            />
          </View>
        </View>

        {/* Filter Section */}
        <View style={styles.filterSection}>
          <Text style={styles.filterLabel}>Filter by</Text>
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Filter Tags */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagContainer}>
          {filterTags.map((tag, index) => (
            <TouchableOpacity key={index} style={styles.filterTag}>
              <Text style={styles.tagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Posts */}
        <View style={styles.postsContainer}>
          {posts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.postContent}>
                <Image source={post.image} style={styles.postImage} />
                <View style={styles.postHeader}>
                  <View style={styles.userInfo}>
                    <View style={styles.avatar}>
                      <Text style={styles.avatarText}>A</Text>
                    </View>
                    <View>
                      <Text style={styles.userName}>{post.user}</Text>
                      {post.rating && <Text style={styles.rating}>{post.rating}</Text>}
                    </View>
                  </View>
                  <TouchableOpacity style={styles.shareButton}>
                    <Feather name="share-2" size={20} color="#088a6a" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.question}>{post.question}</Text>
                {post.description && (
                  <Text style={styles.description}>{post.description}</Text>
                )}
              </View>

              <View style={styles.postFooter}>
                <TouchableOpacity style={styles.actionButton}>
                  <Feather name="thumbs-up" size={18} color="#666" />
                  <Text style={styles.actionText}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Feather name="thumbs-down" size={18} color="#666" />
                  <Text style={styles.actionText}>Dislike</Text>
                </TouchableOpacity>
                <Text style={styles.timeAgo}>{post.timeAgo}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
        {/* Floating Action Button */}
        <TouchableOpacity style={styles.fab}>
        <Feather name="plus" size={24} color="#fff" />
        <Text style={styles.fabText}>Ask Community</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#088a6a',
    paddingTop: 60,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filterSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  filterLabel: {
    fontSize: 16,
    color: '#333',
  },
  changeText: {
    color: '#088a6a',
    fontSize: 14,
  },
  tagContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filterTag: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  tagText: {
    color: '#333',
  },
  postsContainer: {
    padding: 15,
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
     shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  postContent: {
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#088a6a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  rating: {
    fontSize: 12,
    color: '#666',
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actionText: {
    color: '#666',
    fontSize: 14,
  },
  timeAgo: {
    color: '#666',
    fontSize: 12,
    marginLeft: 'auto',
  },
  fab: {
    position: 'absolute',
    bottom: 80,
    right: 16,
    backgroundColor: '#088a6a',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 40,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  fabText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default CommunityScreen;